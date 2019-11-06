while ! pg_isready -h 'todolistepitech_postgres_1' -p '5432'
do
  echo "$(date) - waiting for database to start"
  sleep 2
done

npm start