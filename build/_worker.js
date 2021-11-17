export default {
  async fetch(request) {
    const url = new URL(request.url)
    url.host = 'images-dev.pages.dev'

    const upstream = new Request(url.href, request)
    return await fetch(upstream)
  }
}
