interface DirectorInterface {
  workFromHome: () => string;
  getCoffeeBreak: () => string;
  workDirectorTasks: () => string;
}

interface TeacherInterface {
  workFromHome: () => string;
  getCoffeeBreak: () => string;
  workTeacherTasks: () => string;
}

class Director implements DirectorInterface {
  workFromHome() {
    return "Working from home";
  }
  getCoffeeBreak() {
    return "Getting a coffee break";
  }
  workDirectorTasks() {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome() {
    return "Cannot work from home";
  }
  getCoffeeBreak() {
    return "Cannot have a break";
  }
  workTeacherTasks() {
    return "Getting to work";
  }
}

const createEmployee = (salary: number | string) => {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
};

const isDirector = (employee: Director | Teacher) =>
  employee instanceof Director;

const executeWork = (employee: Director | Teacher) => {
  if (isDirector(employee)) {
    (employee as Director).workDirectorTasks();
  } else {
    (employee as Teacher).workTeacherTasks();
  }
};

type Subjects = "Math" | "History";

const teachClass = (todayClass: Subjects) => {
  return todayClass === "Math" ? "Teaching Math" : "Teaching History";
};
