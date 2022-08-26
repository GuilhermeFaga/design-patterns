/* https://refactoring.guru/design-patterns/singleton */


class Singleton {
  // The field for storing the singleton instance should be
  // declared static.
  private static instance: Singleton

  someVar: string = ""

  // The singleton's constructor should always be private to
  // prevent direct construction calls with the `new`
  // operator.
  private constructor() {
    console.log("Initializing Singleton...")
  }

  // The static method that controls access to the singleton
  // instance.
  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton()
    }
    return Singleton.instance
  }

  static getSomeVar() {
    return Singleton.getInstance().someVar
  }
}


function main() {
  const singleton = Singleton.getInstance()

  singleton.someVar = "some value"

  nestedMain()
  anotherNestedMain()
}


function nestedMain() {
  const singleton = Singleton.getInstance()

  console.log(singleton.someVar)

  singleton.someVar = "another value"
}


function anotherNestedMain() {
  console.log(Singleton.getSomeVar())
}


main()