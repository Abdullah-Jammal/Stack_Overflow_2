import qs from "query-string";

interface UrlQueryParams {
  value: string;
  key: string;
  params: string;
}

interface RemoveUrlQueryParams {
  params: string;
  keysToRemove: string[];
}

// params = query=how%20to%20center%20a%20div%20%3F
// key = "query"
// value = "how to center a div ?"

export const formUrlQuery = ({ params, key, value }: UrlQueryParams) => {
  const queryString = qs.parse(params);
  queryString[key] = value;
  return qs.stringifyUrl({
    url: window.location.pathname,
    query: queryString,
  });
};

export const removeKeysFromUrlQuery = ({
  params,
  keysToRemove,
}: RemoveUrlQueryParams) => {
  const queryString = qs.parse(params);
  keysToRemove.forEach((key) => {
    delete queryString[key];
  });
  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: queryString,
    },
    { skipNull: true }
  );
};
