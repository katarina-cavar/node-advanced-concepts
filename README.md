# node-advanced-concepts
Udemy course: NodeJS Advanced Concepts https://www.udemy.com/course/advanced-node-for-developers/


### Lessons

**Lesson 33: PM2 Configuration**
- `pm2 start index.js -i 0`
  - `-i 0` - I don't know how many threads I want, you figure it out
  - start index processes
- `pm2 delete index`
  - delete all children connected to index
- `pm2 list`
  - summary of health of instances
- `pm2 show index`
  - detailed info about 'index'
- `pm2 monit`
  - dashboard where we can scroll through processes
  - CTRL + C to stop this dashboard
