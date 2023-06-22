// See https://github.com/prisma-labs/graphql-request
import { request, gql } from 'graphql-request'


async function main (myquery) {
  const token = 'web-test-20230622ignLG'
  const endpoint = 'https://dropmail.me/api/graphql/' + token

  const query = gql`${myquery}`
  console.log(myquery)
  const data = await request(endpoint, query)
  console.log(JSON.stringify(data, undefined, 2))
}

(function() {
    var cors_api_host = 'cors-anywhere.herokuapp.com';
    var cors_api_url = 'https://' + cors_api_host + '/';
    var slice = [].slice;
    var origin = window.location.protocol + '//' + window.location.host;
    var open = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function() {
        var args = slice.call(arguments);
        var targetOrigin = /^https?:\/\/([^\\/]+)/i.exec(args[1]);
        if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
            targetOrigin[1] !== cors_api_host) {
            args[1] = cors_api_url + args[1];
        }
        return open.apply(this, args);
    };
})();
main().catch((error) => console.error(error))

export default main