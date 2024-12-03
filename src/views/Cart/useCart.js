import { useState, useEffect, useCallback } from 'react';
import { useApi } from '../../hooks';

export const useCart = () => {
  const defaultSearch = "computer"; // Valor por defecto para la búsqueda
  const [search, setSearch] = useState(defaultSearch);
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [doScroll, setDoScroll] = useState(true);

  const [getItems] = useApi({
    endpoint: 'walmart-search-by-keyword',
    method: 'get',
  });

  const getItemList = async (pageToFetch) => {
    if (loading || !doScroll) return; // Evitar llamadas múltiples mientras carga o si se desactiva el scroll

    setLoading(true); // Indicar que está cargando
    const response = await getItems({
      queryString: {
        keyword: search, // Ahora se utiliza la palabra clave de búsqueda
        page: pageToFetch,
        sortBy: 'best_match',
      },
    });

    let products = [];
    let existProducts =
      response.item.props.pageProps.initialData.searchResult.itemStacks.length > 0;

    if (existProducts) {
      products = response.item.props.pageProps.initialData.searchResult.itemStacks[0].items
        .filter((item) => item.name) // Filtrar productos sin nombre
        .map((item) => ({
          title: item.name,
          price: item.price,
          description: item.description.replace(/<\/?li>/g, ' ') || '',
          image: item.image,
        }));

      setItems((prevItems) => [...prevItems, ...products]); // Concatenar los nuevos productos
      setPage((prevPage) => prevPage + 1); // Incrementar la página
    } else {
      setDoScroll(false); // Si no hay más productos, desactivar el scroll
    }

    setLoading(false); // Finalizar la carga
  };

  const handleScroll = useCallback(() => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    // Verificar si el usuario ha llegado a la parte inferior de la página
    if (scrollTop + clientHeight >= scrollHeight - 100 && !loading && doScroll) {
      // Se agrega un margen de 100px para prevenir la activación prematura
      getItemList(page); // Pasar la página actual
    }
  }, [loading, doScroll, page]); // Dependencias

  useEffect(() => {
    // Cargar la primera página solo cuando el usuario ha llegado al fondo
    if (doScroll) {
      getItemList(page); // Cargar la primera página cuando se inicie el scroll
    }
  }, [doScroll, page]); // Se activará cuando doScroll sea verdadero

  useEffect(() => {
    // Reiniciar la lista de elementos y la página cuando cambie la búsqueda
    setItems([]); // Reiniciar los elementos
    setPage(1); // Reiniciar la página
    setDoScroll(true); // Asegurarse de que el scroll esté habilitado
    getItemList(1); // Cargar la primera página con la nueva búsqueda
  }, [search]); // Se activará cuando cambie la búsqueda

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]); // Recalcular si cambia handleScroll

  // Método para limpiar los campos y regresar al valor por defecto
  const resetCart = () => {
    setSearch(defaultSearch); // Restablecer el valor de búsqueda
    setItems([]); // Limpiar los elementos
    setPage(1); // Reiniciar la página
    setDoScroll(true); // Asegurarse de que el scroll esté habilitado
    getItemList(1); // Cargar la primera página con el valor por defecto
  };

  return {
    items,
    search,
    setSearch,
    resetCart // Retornar el método para limpiar los campos
  };
};