
module.exports =
  options:
    files: ['package.json', 'bower.json']
#    updateConfigs: ['pkg', 'bower']
    commit: true
    commitFiles: ['.']
    createTag: true
    tagName: 'v%VERSION%'
    push: true
    pushTo: 'origin'
