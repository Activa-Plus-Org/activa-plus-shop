export const API_ENDPOINTS = {
  PRODUCTS: '/products',
  PRODUCTS_POPULAR: '/popular-products',
  PRODUCTS_BY_SERVICE: 'products/findProductsByService',
  PRODUCTS_FREE_DOWNLOAD: '/free-downloads/digital-file',
  PRODUCTS_REVIEWS: '/reviews',
  PRODUCTS_REVIEWS_ABUSE_REPORT: '/abusive_reports',
  PRODUCTS_QUESTIONS: '/questions',
  PRODUCTS_FEEDBACK: '/feedbacks',
  SERVICES: '/services',
  CATEGORIES: '/categories',
  TAGS: '/tags',
  TYPES: '/types',
  SHOPS: '/shops',
  TOP_SHOPS: '/top-shops',
  ORDERS: '/orders',
  ORDERS_CHECKOUT_VERIFY: 'orders/checkout/verify',
  ORDERS_DOWNLOADS: '/downloads',
  ORDERS_PURCHASE_SYNC: '/purchases/createPurchaseSync',
  ORDERS_PURCHASE_ASYNC: '/purchases/createPurchaseAsync',
  GENERATE_DOWNLOADABLE_PRODUCT_LINK: '/downloads/digital-file',
  //----
  USERS: '/users',
  USERS_ME: '/auth/me',
  USERS_LOGIN: '/auth/login',
  USERS_REGISTER: '/auth',
  //----
  CLAIMS: '/claims',
  CLAIMS_BY_USER: '/claims/getClaimsByUser',
  //----
  CAUSES: '/causes',
  //----
  VIEWS_SERVICES_BY_USER: '/view-user-services/getViewServicesByUser',
  //----
  USERS_FORGOT_PASSWORD: '/forget-password',
  USERS_VERIFY_FORGOT_PASSWORD_TOKEN: '/verify-forget-password-token',
  USERS_RESET_PASSWORD: '/reset-password',
  USERS_CHANGE_PASSWORD: '/auth/changePassword',
  //----
  USERS_LOGOUT: '/auth/logout',
  //----
  USERS_WISHLIST: '/my-wishlists',
  WISHLIST: '/wishlists',
  WALLET_USER_ID: '/wallets/findOneByUser',
  WALLET_RECHARGE: 'wallets/recharge',
  PAYMENT_GENERATE_URL: 'https://yopago.com.bo/pay/api/generateUrl',
  SAVE_PAYMENT_TRANSACTION: 'history-wallets/createPaymentTransaction',
  USERS_WISHLIST_TOGGLE: '/wishlists/toggle',
  MY_REPORTS: '/my-reports',
  MY_QUESTIONS: '/my-questions',
  SETTINGS: '/settings',
  SETTINGS_CONTACT_US: '/settings/contact-us',
  UPLOADS: '/attachments',
  FOLLOW_SHOP: 'follow-shop',
  FOLLOWED_SHOPS: 'followed-shops',
  FOLLOWED_SHOPS_PRODUCTS: 'followed-shops-popular-products',
};
