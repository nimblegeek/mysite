curl -X DELETE "https://api.cloudflare.com/client/v4/zones/6faecbf69f28382db6576bd5b4e60995/purge_cache" \
-H "X-Auth-Email: amjad.masad@gmail.com" \
-H "X-Auth-Key: $CF_API" \
-H "Content-Type:application/json" \
--data '{"purge_everything":true}'

#curl -X GET "https://api.cloudflare.com/client/v4/zones" \
#    -H "X-Auth-Email: amjad.masad@gmail.com" \
#    -H "X-Auth-Key: $CF_API" \
#    -H "Content-Type: application/json"

curl -X POST "https://api.cloudflare.com/client/v4/zones/09465a38c44d2b521eef52ca8e62310c/purge_cache" \
     -H "X-Auth-Email: amjad.masad@gmail.com" \
     -H "X-Auth-Key: $CF_API" \
     -H "Content-Type: application/json" \
     --data '{"hosts": ["blog.replit.com"]}'