//Programação Orientada a Objetos
//O que é   
//É um paradigma de programação que utiliza objetos e classes para estruturar o código.
//Objetos são instâncias de classes, que podem conter propriedades (atributos) e métodos (funções).
//Classes são moldes para criar objetos, definindo suas propriedades e métodos.
//A POO é baseada em quatro pilares principais: abstração, encapsulamento, herança e polimorfismo.
//Esses pilares ajudam a organizar o código, tornando-o mais modular, reutilizável e fácil de manter.
//Os principais conceitos da POO são:
//- Classe: é uma estrutura que define um tipo de objeto, com suas propriedades e métodos.
//- Objeto: é uma instância de uma classe, que possui suas próprias propriedades e métodos.
//- Atributo: é uma propriedade de um objeto, que armazena um valor ou estado.
//- Método: é uma função definida dentro de uma classe, que pode ser chamada em um objeto daquela classe.
//- Herança: é um mecanismo que permite criar novas classes a partir de classes existentes, herdando suas propriedades e métodos.
//- Polimorfismo: é a capacidade de um objeto assumir diferentes formas, permitindo que métodos com o mesmo nome se comportem de maneira diferente em classes diferentes.
//- Encapsulamento: é o princípio de esconder a implementação interna de um objeto, expondo apenas uma interface pública para interação.
//- Abstração: é o processo de simplificar a complexidade, focando apenas nas características essenciais de um objeto.
//- Instância: é um objeto criado a partir de uma classe, que possui suas próprias propriedades e métodos.
//- Construtor: é um método especial de uma classe que é chamado quando um objeto é criado, inicializando suas propriedades.
//- Destrutor: é um método especial de uma classe que é chamado quando um objeto é destruído, liberando recursos alocados.
//- Interface: é um contrato que define um conjunto de métodos que uma classe deve implementar, sem fornecer a implementação.
//- Módulo: é uma unidade de código que encapsula funcionalidades relacionadas, permitindo reutilização e organização do código.
//- Composição: é um princípio que permite criar classes complexas a partir de classes mais simples, combinando suas funcionalidades.
//- Agregação: é um tipo de associação entre classes, onde uma classe contém referências a outras classes, mas sem depender delas.
//- Associação: é uma relação entre classes, onde uma classe utiliza outra como parte de sua implementação.
//- Dependência: é uma relação entre classes, onde uma classe depende de outra para funcionar corretamente.
//- Delegação: é um padrão de design onde um objeto delega a responsabilidade de uma tarefa a outro objeto.
//- Singleton: é um padrão de design que garante que uma classe tenha apenas uma instância e fornece um ponto de acesso global a ela.
//- Factory: é um padrão de design que fornece uma interface para criar objetos, sem expor a lógica de criação ao cliente.
//- Strategy: é um padrão de design que permite definir uma família de algoritmos, encapsulando cada um deles e tornando-os intercambiáveis.
//- Observer: é um padrão de design que define uma relação de dependência entre objetos, onde um objeto (sujeito) notifica outros objetos (observadores) sobre mudanças em seu estado.
//- Decorator: é um padrão de design que permite adicionar funcionalidades a um objeto dinamicamente, sem alterar sua estrutura original.
//- Adapter: é um padrão de design que permite que classes com interfaces incompatíveis trabalhem juntas, adaptando uma interface à outra.
//- Proxy: é um padrão de design que fornece um substituto ou representante para outro objeto, controlando o acesso a ele.
//- Command: é um padrão de design que encapsula uma solicitação como um objeto, permitindo parametrizar clientes com diferentes solicitações.
//- Template Method: é um padrão de design que define o esqueleto de um algoritmo em uma classe, permitindo que subclasses implementem etapas específicas do algoritmo.
//- Visitor: é um padrão de design que permite adicionar novas operações a uma estrutura de objetos sem modificar sua estrutura.
//- Composite: é um padrão de design que permite compor objetos em estruturas de árvore, tratando objetos individuais e composições de maneira uniforme.
//- Facade: é um padrão de design que fornece uma interface simplificada para um conjunto complexo de interfaces em um subsistema.
//- Builder: é um padrão de design que separa a construção de um objeto complexo da sua representação, permitindo criar diferentes representações com o mesmo processo de construção.
//- Prototype: é um padrão de design que permite criar novos objetos copiando um objeto existente, conhecido como protótipo.
//- Chain of Responsibility: é um padrão de design que permite que múltiplos objetos tratem uma solicitação, passando-a ao longo de uma cadeia de manipuladores até que um deles a trate.
//- State: é um padrão de design que permite que um objeto altere seu comportamento quando seu estado interno muda, parecendo mudar sua classe.
//- Mediator: é um padrão de design que define um objeto que encapsula como um conjunto de objetos interage, promovendo a comunicação entre eles sem que estejam diretamente acoplados.
//- Flyweight: é um padrão de design que permite compartilhar objetos para suportar um grande número de objetos granulares, economizando memória.
//- Bridge: é um padrão de design que desacopla uma abstração de sua implementação, permitindo que ambas evoluam independentemente.
//- Interpreter: é um padrão de design que define uma representação gramatical para uma linguagem e fornece um interpretador para essa linguagem.
//- Iterator: é um padrão de design que fornece uma maneira de acessar os elementos de um objeto agregado sequencialmente, sem expor sua representação interna.
//- Mediator: é um padrão de design que define um objeto que encapsula como um conjunto de objetos interage, promovendo a comunicação entre eles sem que estejam diretamente acoplados.
//- Null Object: é um padrão de design que utiliza um objeto nulo para evitar verificações de nulidade, fornecendo um comportamento padrão.
//- Data Transfer Object (DTO): é um padrão de design que transporta dados entre processos, encapsulando os dados em um objeto simples.
//- Value Object: é um padrão de design que representa um objeto imutável, definido apenas por seus atributos e sem identidade própria.
//- Active Record: é um padrão de design que combina o acesso a dados e a lógica de negócios em uma única classe, representando uma tabela em um banco de dados.
//- Repository: é um padrão de design que fornece uma abstração para o acesso a dados, separando a lógica de negócios da lógica de persistência.
//- Unit of Work: é um padrão de design que mantém o controle das alterações feitas em um conjunto de objetos, permitindo que sejam salvas em uma única transação.
//- Service Locator: é um padrão de design que fornece uma maneira de localizar serviços em um aplicativo, centralizando a resolução de dependências.
//- Dependency Injection: é um padrão de design que permite injetar dependências em um objeto, em vez de o objeto criar suas próprias dependências.
//- Aspect-Oriented Programming (AOP): é um paradigma de programação que permite separar preocupações transversais, como logging e segurança, do código principal.
//- Microservices: é uma abordagem arquitetural que divide um aplicativo em serviços pequenos e independentes, que se comunicam entre si por meio de APIs.
//- Event-Driven Architecture: é uma arquitetura que utiliza eventos para comunicar mudanças de estado entre componentes, promovendo desacoplamento e escalabilidade.
//- Domain-Driven Design (DDD): é uma abordagem de design de software que foca na modelagem do domínio e na colaboração entre especialistas do domínio e desenvolvedores.
//- Test-Driven Development (TDD): é uma prática de desenvolvimento onde os testes são escritos antes do código, garantindo que o código atenda aos requisitos definidos.
//- Behavior-Driven Development (BDD): é uma prática de desenvolvimento que foca no comportamento do sistema, utilizando uma linguagem comum entre desenvolvedores e não desenvolvedores.
//- Continuous Integration (CI): é uma prática de desenvolvimento onde o código é integrado e testado continuamente, garantindo a qualidade do software.
//- Continuous Delivery (CD): é uma prática de desenvolvimento onde o software é entregue continuamente em produção, garantindo que esteja sempre pronto para ser lançado.
//- DevOps: é uma prática que combina desenvolvimento e operações, promovendo a colaboração entre equipes para melhorar a entrega de software.
//- Agile: é uma abordagem de desenvolvimento que foca na entrega contínua de software funcional, promovendo a colaboração entre equipes e clientes.
//- Scrum: é uma metodologia ágil que utiliza sprints para entregar incrementos de software, promovendo a colaboração entre equipes e clientes.