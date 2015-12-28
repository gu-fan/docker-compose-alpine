# FROM tutum/nginx
# RUN rm /etc/nginx/sites-enabled/default
# ADD sites-enabled/ /etc/nginx/sites-enabled
FROM alpine:3.3
RUN apk add --no-cache nginx
ADD nginx.conf /etc/nginx/nginx.conf
ADD sites-enabled/ /etc/nginx/sites-enabled

EXPOSE 80

CMD ["/usr/sbin/nginx"]
