export { route }

function route(pageContext) {

    const parts ='urlPathname' in pageContext && pageContext.urlPathname.split("/")

    if (parts[1] !== "products")
        return false
    else {
        return {
            routeParams: {
                id: parts[2]
            }
        }
    }



}