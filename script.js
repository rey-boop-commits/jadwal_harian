// Daily Planner - Vanilla JS
const STORAGE_KEY = 'daily-planner-tasks-v1';

// Elements
const form = document.getElementById('task-form');
const nameInput = document.getElementById('task-name');
const timeInput = document.getElementById('task-time');
const list = document.getElementById('task-list');
const today = document.getElementById('today');

// Load and render on start
document.addEventListener('DOMContentLoaded', ()=>{
  showToday();
  renderTasks();
});

function showToday(){
  const now = new Date();
  const opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  try{
    today.textContent = now.toLocaleDateString('id-ID', opts);
  }catch(e){
    today.textContent = now.toDateString();
  }
}

function loadTasks(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  }catch(e){
    console.error('Gagal membaca localStorage', e);
    return [];
  }
}

function saveTasks(tasks){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function sortTasks(tasks){
  // Expect time in HH:MM; stable numeric compare
  return tasks.slice().sort((a,b)=>{
    if(!a.time && !b.time) return 0;
    if(!a.time) return 1;
    if(!b.time) return -1;
    return a.time.localeCompare(b.time);
  });
}

function renderTasks(){
  const tasks = sortTasks(loadTasks());
  list.innerHTML = '';
  if(tasks.length === 0){
    const el = document.createElement('li');
    el.className = 'task-item';
    el.textContent = 'Belum ada kegiatan. Tambah kegiatan menggunakan form di atas.';
    list.appendChild(el);
    return;
  }

  tasks.forEach(task=>{
    const li = document.createElement('li');
    li.className = 'task-item' + (task.done ? ' completed' : '');

    // left: checkbox + time + name
    const left = document.createElement('div');
    left.className = 'task-left';

    const chk = document.createElement('input');
    chk.type = 'checkbox';
    chk.checked = !!task.done;
    chk.setAttribute('aria-label', 'Tandai selesai ' + task.name);
    chk.addEventListener('change', ()=>{
      toggleDone(task.id, chk.checked);
    });

    const info = document.createElement('div');
    info.style.display = 'flex';
    info.style.gap = '8px';
    info.style.alignItems = 'center';

    const time = document.createElement('div');
    time.className = 'task-time';
    time.textContent = task.time || '--:--';

    const name = document.createElement('div');
    name.className = 'task-name';
    name.textContent = task.name;

    info.appendChild(time);
    info.appendChild(name);

    left.appendChild(chk);
    left.appendChild(info);

    // actions
    const actions = document.createElement('div');
    actions.className = 'task-actions';

    const del = document.createElement('button');
    del.className = 'btn-icon btn-delete';
    del.textContent = 'Hapus';
    del.addEventListener('click', ()=>{
      if(confirm('Hapus kegiatan "' + task.name + '"?')) deleteTask(task.id);
    });

    actions.appendChild(del);

    li.appendChild(left);
    li.appendChild(actions);

    list.appendChild(li);
  });
}

function addTask(name, time){
  if(!name) return;
  const tasks = loadTasks();
  tasks.push({ id: Date.now(), name: name.trim(), time: time || '', done: false });
  saveTasks(tasks);
  renderTasks();
}

function deleteTask(id){
  let tasks = loadTasks();
  tasks = tasks.filter(t=>t.id !== id);
  saveTasks(tasks);
  renderTasks();
}

function toggleDone(id, done){
  const tasks = loadTasks();
  const idx = tasks.findIndex(t=>t.id===id);
  if(idx === -1) return;
  tasks[idx].done = !!done;
  saveTasks(tasks);
  renderTasks();
}

// Form submit
form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const name = nameInput.value;
  const time = timeInput.value;
  if(!name.trim()){ nameInput.focus(); return; }
  addTask(name, time);
  form.reset();
  nameInput.focus();
});
