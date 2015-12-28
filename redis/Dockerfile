FROM alpine:3.3

# Install packages

RUN \
  apk --update --no-cache add redis wget && \
  wget --no-check-certificate -O /usr/local/bin/gosu https://github.com/tianon/gosu/releases/download/1.4/gosu-amd64 && \
  chmod +x /usr/local/bin/gosu 

RUN mkdir /data && chown redis:redis /data

VOLUME /data

WORKDIR /data

COPY docker-entrypoint.sh /docker-entrypoint

ENTRYPOINT ["/docker-entrypoint"]

EXPOSE 6379

CMD ["redis-server"]
