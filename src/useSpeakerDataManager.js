import speakersReducer from './speakersReducer';
import SpeakerData from './SpeakerData';
import { useEffect, useReducer } from 'react';

function useSpeakerDataManager() {
  const [{ isLoading, speakerList }, dispatch] = useReducer(speakersReducer, {
    isLoading: true,
    speakerList: [],
  });

  useEffect(() => {
    // setIsLoading(true);
    new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, 1000);
    }).then(() => {
      dispatch({
        type: 'setSpeakerList',
        data: SpeakerData,
      });
    });
    return () => {
      console.log('cleanup');
    };
  }, []);

  return { isLoading, speakerList, dispatch };
}

export default useSpeakerDataManager;
