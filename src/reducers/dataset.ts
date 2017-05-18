import {
  Action,
  DATASET_URL_RECEIVE,
  DATASET_URL_REQUEST,
} from '../actions';
import {Dataset} from '../models';

export function datasetReducer(dataset: Readonly<Dataset>, action: Action): Dataset {
  switch (action.type) {
    case DATASET_URL_REQUEST:
      return {
        ...dataset,
        isLoading: true
      };

    case DATASET_URL_RECEIVE:
      const {name, url, schema} = action.payload;
      return {
        ...dataset,
        isLoading: false,
        name,
        schema,
        data: {url}
      };
  }
  return dataset;
}
