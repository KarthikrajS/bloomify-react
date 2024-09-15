export { route }

function route(pageContext) {

    const parts = 'urlPathname' in pageContext && pageContext.urlPathname.split("/")
    console.log(parts, "parts");
    if (parts[1] !== "product")
        return false
    else {
        return {
            routeParams: {
                id: parts[2]
            }
        }
    }



}