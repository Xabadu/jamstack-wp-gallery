const BASE_URL = "https://comolohago.cl/wp-json/wp/v2";

export default {
  tutorials: `${BASE_URL}/posts?include=9149,193,9217,4583,9170,9260,7553,9185,4203,5234,5953,9218,9286&per_page=20&_embed`,
  categories: `${BASE_URL}/categories?include=343,24,182,1695,440`,
};
