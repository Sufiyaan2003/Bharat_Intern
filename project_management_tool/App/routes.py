from flask import render_template, request, redirect, url_for
from app import app, db
from app.models import User, Task

@app.route('/')
def index():
    users = User.query.all()
    tasks = Task.query.all()
    return render_template('index.html', users=users, tasks=tasks)

@app.route('/create_task', methods=['POST'])
def create_task():
    title = request.form.get('title')
    description = request.form.get('description')
    assigned_to = request.form.get('assigned_to')
    assigned_by = request.form.get('assigned_by')
    task = Task(title=title, description=description, assigned_to=assigned_to, assigned_by=assigned_by)
    db.session.add(task)
    db.session.commit()
    return redirect(url_for('index'))
 
