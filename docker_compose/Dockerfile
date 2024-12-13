FROM ubuntu:latest
RUN apt-get update && apt-get install -y openssh-server nginx && apt-get clean
RUN mkdir /var/run/sshd && echo 'root:root' | chpasswd
RUN sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config
EXPOSE 80 22
CMD service ssh start && nginx -g "daemon off;"