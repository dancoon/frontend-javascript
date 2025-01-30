class Cpp extends Subjects.Subject {
  get getRequirements(): string {
    return "Here is the list of requirements for Cpp";
  }
  get getAvailableTeacher() {
    return this.teacher.experienceTeachingC
      ? `Available Teacher: ${this.teacher.firstName}`
      : "No available teacher";
  }
  
}
