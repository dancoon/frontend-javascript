class Java extends Subjects.Subject {
    get getRequirements(): string {
      return "Here is the list of requirements for Java";
    }
    get getAvailableTeacher() {
      return this.teacher.experienceTeachingC
        ? `Available Teacher: ${this.teacher.firstName}`
        : "No available teacher";
    }
    
  }