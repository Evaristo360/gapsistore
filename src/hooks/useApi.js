import _ from 'lodash';
import { useState, useEffect } from 'react';
import { useModal } from '../components/Modal';
import { HttpErrorAlert } from '../components/HttpErrorAlert';
import { useLoader } from '../components/Loader';
import { instance } from '../providers/api';
import { toQueryString } from '../utils/http';

const useApi = ({ endpoint, method }) => {
  const [responseData, setResponseData] = useState(null);
  const [responseCode, setResponseCode] = useState(null);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { handleOpenModal, handleCloseModal } = useModal();
  const { handleShowLoader } = useLoader();

  useEffect(() => {
    if (error || (responseCode && responseCode >= 400)) {
      const customMessage = _.get(responseData, 'headerResponse.message', null);

      handleOpenModal({
        configProps: {
          maxWidth: 'sm'
        },
        body: (
          <HttpErrorAlert
            errorCode={error ? error.code : responseCode}
            errorMessage={error.message || customMessage}
            onAccept={handleCloseModal}
          />
        )
      });
    }
  }, [error, responseCode]);

  const handleFetch = async ({
    body = {},
    urlParams = null,
    queryString = null,
    ignoreValidation = false
  } = {}) => {
    let url = `${endpoint}${urlParams ? `/${urlParams}` : ''}`;

    if (_.isObject(queryString)) {
      url = `${url}?${toQueryString(queryString)}`;
    }

    try {
      setLoading(true);
      handleShowLoader(true);
      setError(null);

      const response = await instance[method](url, body);
      if (!ignoreValidation) {
        const headerResponse = _.get(response, 'data');
        const hasError = _.get(response, 'status', 0) !== 200;

        const status = _.get(response, 'status', 666);
        const message = _.get(headerResponse, 'message', '');

        if (hasError) {
          setError({
            code: status,
            name: message,
            message: message
          });
        } else {
          setResponseData(response.data);
          setStatus(status);
          setResponseCode(status);
        }
      }

      return response.data;
    } catch (error) {
      setLoading(false);
      handleShowLoader(false);

      setError({
        code: _.get(error, 'response.status'),
        name: _.get(error, 'response.statusText'),
        message: _.get(error, 'response.data.message', null)
      });

      return _.get(error, 'response.data');
    } finally {
      setLoading(false);
      handleShowLoader(false);
    }
  };

  return [handleFetch, responseData, loading, status];
};

export { useApi };