const SEARCH_PLACEHOLDER = 'Search music, album or artist...';
const AUTH_TOKEN = '1.YWxwZXJkYWdnZXo5NkBnbWFpbC5jb20=.NjyZa4YrkwAX9WgHaoGkO6zl'
const baseUrl = 'https://musicdb.jobs.otsimo.com'

const secondsToDuration = function(sec){
    const hours   = Math.trunc(sec / 3600)
    const minutes = Math.trunc(sec / 60) % 60
    const seconds = sec % 60

    return [hours,minutes,seconds]
        .map(e => e < 10 ? "0" + e : e)
        .filter((e,i) => e !== "00" || i > 0)
        .join(":")

}

export {SEARCH_PLACEHOLDER, AUTH_TOKEN, baseUrl, secondsToDuration}