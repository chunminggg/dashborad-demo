/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 *
 */
const config = {
    "routerMode": "hash",
    "CODE": 200,
    "PAGE_INDEX": 1,
    "PAGE_SIZE": 10,
    BASE_URL: window.API_URL
}
export default config;