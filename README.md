Путешествия по РОССИИ

Проектная работа 7
Работа этого спринта целиком нацелена на рефакторинг. 

Включает в себя:
Создание классов Card и FormValidator
Создан класс Card, который создаёт карточку с текстом и ссылкой на изображение:
•	принимает в конструктор её данные и селектор её template-элемента;
•	содержит приватные методы, которые работают с разметкой, устанавливают слушателей событий;
•	содержит приватные методы для каждого обработчика;
•	содержит один публичный метод, который возвращает полностью работоспособный и наполненный данными элемент карточки.
Создан класс FormValidator, который настраивает валидацию полей формы:
•	принимает в конструктор объект настроек с селекторами и классами формы;
•	принимает вторым параметром элемент той формы, которая валидируется;
•	имеет приватные методы, которые обрабатывают форму: проверяют валидность поля, изменяют состояние кнопки сабмита, устанавливают все обработчики;
•	имеет публичный метод enableValidation, который включает валидацию формы.

Дальнейшая работа:
- Устранение ошибок;

GiTHub Pages
<https://semenovdmitrii.github.io/mesto/>