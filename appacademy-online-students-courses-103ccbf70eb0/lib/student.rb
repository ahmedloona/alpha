class Student
  attr_reader :first_name, :last_name, :courses
  def initialize(first_name, last_name)
    @first_name = first_name
    @last_name = last_name
    @courses = []
  end

  def name
    "#{@first_name} #{@last_name}"
  end

  def enroll(course)
    conflict = @courses.any? do |existing_course|
      course.conflicts_with?(existing_course)
    end
    raise "#{course} conflicts with a current course" if conflict
    @courses << course unless @courses.include?(course)
    course.students << self
  end

  def course_load
      load_hash = Hash.new(0)
      @courses.each do |course|
        load_hash[course.department] += course.credits
      end
      load_hash
  end
end
