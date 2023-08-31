# E13.7.-wpds

E13.7. Практическая работа

1.Установить и настроить webpack-dev-server.
2.Настроить hot module replacement.
3.Сделать возможность запуска на разных окружениях (dev, prod) c разной конфигурацией (например, убрать HMR на проде).
4.Настроить JSON-server и отображать полученные с него данные.
5.Добавить запуск линтера при комите.

Клонируем репозиторий в IDE или BASH: git clone git@github.com:Azazel3091/E13.7.-wpds2.git

Установить модули: npm install

Запуск на разных окружениях:
npm run start:dev для webpack.dev.js
и
npm run start:prod для webpack.prod.js

Для настройки JSON-server: json-server --watch database.json

Для запуска комита: git commit
