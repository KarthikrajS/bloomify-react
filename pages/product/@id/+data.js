export async function data(pageContext) {
    const userCookie = 'headers.cookie' in pageContext && pageContext.headers.cookie
    console.log(userCookie, "userCookie");
}