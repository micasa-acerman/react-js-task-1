# React JS Task 1

* Студент: [Мрикаев Константин](https://github.com/micasa-acerman).

## Картинка
![Random pick](https://source.unsplash.com/random/640x480)
## Таблицы и Форматирование

| Форматирование | Результат |
| :-- | ---: |
| \* Курсив \* | *Курсив* |
| \*\* Жирный \*\* | ** Жирный ** |
| \*\*\* Курсив+жирный \*\*\* | *** Жирный+Курсив *** |

```json
{
  "course": "Learn React for begginers",
  "progress": "2%",
  "duration": 2
}
```

## UML

```plantuml
@startuml
[render]
[React update DOM & refs]
package "Mounting" {
  [constructor] -down- [render]
  [render] - [React update DOM & refs]
  [React update DOM & refs] - [componentDidMount]
}
package "Updating" {
  newProps -down- [render]
  setState -down- [render]
  forceUpdate -down- [render]
  [render]- [React update DOM & refs]
  [React update DOM & refs]- [componentDidUpdate]
}
package "Unmount" {
  [componentWillUnmount]
}
@enduml
```

![alternative text](http://www.plantuml.com/plantuml/png/dO-nQiGm38PtFuMueTkzmmst7YqjfKFmO6nT2BKb8yjaA7ttuYGaj2GTRXDyqg__knHreZL5qmbIGB6cUqNd5MeEJX6kppTu0i5xiIOx_-bwXDEDA-b0_Gc-343dcOfAzSfYuHnuf3EiSR2C3S5nDXopTkSvPIOalGvX-cxDzzRdlTsiVGZ75-5STgeKr3TrYZlepk9n2i9_71vK-6Cml_cjGAbfpGRRyiSGuuBQ-WKfr1H_0000)

[Редактировать ⚡️](https://stackblitz.com/edit/react-rdjb4x)