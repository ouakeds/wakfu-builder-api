sudo sh -c 'echo "deb https://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
sudo apt-get update
sudo apt-get -y install postgresql
sudo -i -u postgres
psql
CREATE DATABASE database;
exit;
exit;

# https://www.atlassian.com/data/admin/how-to-set-the-default-user-password-in-postgresql#:~:text=For%20most%20systems%2C%20the%20default,is%20not%20required%20for%20authentication.

# default port 5432
# default user postgres