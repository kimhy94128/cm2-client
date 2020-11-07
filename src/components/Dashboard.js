import React from 'react'


function Dashboard() {
  return (
    <>
      <div class="row">
        <div class="col-xl-8 mb-5 mb-xl-0">
          <div class="card shadow">
            <div class="card-header border-0">
              <div class="row align-items-center">
                <div class="col">
                  <h3 class="mb-0">과목별 인원</h3>
                </div>
              </div>
            </div>
            <div class="table-responsive">
              {/* <!-- Projects table --> */}
              <table class="table align-items-center table-flush">
                <thead class="thead-light">
                  <tr>
                    <th scope="col">과목명</th>
                    <th scope="col">인원</th>
                    <th scope="col">전월대비</th>
                  </tr>
                </thead>
                <tbody>
                  {/* <% if(subjects){ %>
                  <% subjects.forEach(list => { %>
                    <tr>
                      <td><%= list.s_name %> (<%= list.type %>)</td>
                      <td>
                        <% usersPerSubjects.forEach(subject => { %>
                          <% if(subject.sid === list.sid){ %>
                            <%= subject.count %>명
                          <% } %>
                        <% }) %> 
                      </td>
                      <td>
                        <% usersPerSubjectsPrev.forEach(subject => { %>
                          <% if(subject.sid === list.sid){ %>
                            <%= subject.count %>명
                          <% } %> 
                        <% }) %> 
                      </td>
                    </tr>
                  <% }) %> 
                  <% } else { %>
                    <td></td>
                    <td></td>
                  <% } %> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="col-xl-4">
          <div class="card shadow">
            <div class="card-header border-0">
              <div class="row align-items-center">
                <div class="col">
                  <h3 class="mb-0">강사별 인원</h3>
                </div>
              </div>
            </div>
            <div class="table-responsive">
              {/* <!-- Projects table --> */}
              <table class="table align-items-center table-flush">
                <thead class="thead-light">
                  <tr>
                    <th scope="col">강사명</th>
                    <th scope="col">인원</th>
                  </tr>
                </thead>
                <tbody>
                  {/* <% if(teachers){ %>
                    <% teachers.forEach(list => { %>
                    <tr>
                      <td><%= list.name %></td>
                      <td>
                        <% usersPerTeachers.forEach(teacher => { %>
                          <% if(teacher.tid === list.tid){ %>
                            <%= teacher.count %>명
                          <% } %> 
                        <% }) %> 
                      </td>
                    </tr>
                    <% }) %>
                  <% } %>  */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer -->
      <% include ../partials/footer %> */}
    </>
  )
}

export default Dashboard
