# GOFTS (Gang of four design patterns typescript)

- Creational
- Structural
    - Adapter
    - Facade
    - Decorator
    - Composite
- Behavioural 
    - Command
    - Iterator
    - 


## Adapter

Адаптер преобразует интерфейс одного класса в другой интерфейс, на который рассчитаны клиенты.
Позволяет объектам с несовестимыми интерфейсами работать вместе. 

**Target** - целевой интерфейс.

**Adaptee** - адаптируемый объект с несовместимым интерфейсом.

**Adapter** - адаптирует интерфейс Adaptee к целевому интерфейсу(Target). Хранит в себе ссылку на адаптируемый объект. Удовлетворяет целевому интерфейсу, принимает вызовы от клиента и переводит их в вызовы адаптируемого объекта в правильном формате.

![Adapter pattern diagram](/assets/Adapter.jpg "Adapter pattern diagram")

## Facade

Фасад предоставляет простой верхнеуровневый интерфейс к группе интерфейсов подсистемы и обеспечивает логическую изоляцию клиента от подсистемы. Упрощается работа с подсистемой при этом классы подсистемы остаются доступными для прямого использования.

![Facade pattern diagram](/assets/Facade.jpg "Facade pattern diagram")

## Composite


## Iterator

Паттерн итератор обеспечивает перебор элементов коллекции без раскрытия внутреннего представления коллекции.

![Iterator pattern diagram](/assets/Iterator.jpg "Iterator pattern diagram")