import { get, post } from './helpers/ApiRequestsHelper'

function getProductCategories() {
  return get('productCategories/')
}

function create(productData) {
  return post('products/', productData)
}

export { getProductCategories, create }
