# GOFTS (Gang of four design patterns typescript)

- Creational
- Structural
    - Adapter
    - Facade
- Behavioural 
    - Command


## Adapter

Адаптер преобразует интерфейс одного класса в другой интерфейс, на который рассчитаны клиенты.
Позволяет объектам с несовестимыми интерфейсами работать вместе. 

**Target** - целевой интерфейс.

**Adaptee** - адаптируемый объект с несовместимым интерфейсом.

**Adapter** - адаптирует интерфейс Adaptee к целевому интерфейсу(Target). Хранит в себе ссылку на адаптируемый объект. Удовлетворяет целевому интерфейсу, принимает вызовы от клиента и переводит их в вызовы адаптируемого объекта в правильном формате.

![Adapter pattern diagram](/assets/Adapter.jpg "Adapter pattern diagram")

## Facade