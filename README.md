# Краткое описание проиложенния **_test-reviews-app_**\*\*

## Описание функционала приложения

Приложения [test-reviews-app](https://shapoval-sergey.github.io/test-reviews-app/) создано для того, чтобы люди могли оставлять свои комментарии. В данном приложении есть форма которую посититель должен заполнить чтобы оставить свои комментарий. Форма состоит из _поля для ввода именни_ - **input**, _поля для ввода текста комментария_ - **textarea**, и _кнопки для отправки формы_ - **button**. Поля **input** и **textarea** отвалидированые так что ==нельзя отправить визуально пустые поля==, ==нельзя отправить поле имя с недопустимыми символами==, ==есть уведомление о том, какая в каком поле ошибка==, ==уведомление об ошибке скрывается при начале ввода в соответствующее поле== и.т.д.. Приложения адаптировано под все виды устройств.

## Технологии которие были использованые при создании приложенния

Для создания приложения использовано стек технологий _MERN - MongoDB, Express.js, React.js, Node.js_. Приложения поделенно на две составляющих frontend и backend. Frontend реализован библиотекой _React.js и Material-UI_. Backend написан на _Node.js_ с использованиям фреймворка _Express.js_. Система управления базами данных _MongoDB_.

## Инструкция по сборке и запуску

> На [heroku](dashboard.heroku.com) сделаные следующие раути:
>
> - Создания комментаря POST-запрос <https://radiant-tundra-36046.herokuapp.com/> в body передается обьект {name: custom..., descr:custom...};
> - Получения массива комментариев GET-запрос <https://radiant-tundra-36046.herokuapp.com/>.

Для начала роботы с приложенниям в корне проекта введите команду `npm run dev`. Ета команда позволит параллельно запустить frontend и backend скрипты. После того как все изменения в коде запушины на удаленный репозиторий нужно запушить узменения на **heroku** командой `git push heroku main`.Потом переходим в директорию /client командой `cd client` и собираем проект командой `npm run deploy` придварительно установив пакет `gh-pages`.
