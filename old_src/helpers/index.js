const objectToParams = (object) => {
  const params = new URLSearchParams();
  Object.entries(object).forEach((entry) => {
    let [key, value] = entry;
    params.set(key, value);
  });
  return params.toString();
};

const paramsToObject = (paramString) => {
  const params = new URLSearchParams(paramString);
  const object = {};
  for (const [key, value] of params.entries()) {
    object[key] = value;
  }
  return object;
};

const slugify = (string) => {
  return string
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
};

export { slugify, objectToParams, paramsToObject };
