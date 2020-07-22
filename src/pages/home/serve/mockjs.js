import Mock from 'mockjs';

export default Mock.mock('/api/msg/all', 'get', {
    "data|10":[
        {
            "id|+1":1,
            "title|+1":[Mock.Random.cword(8,20),Mock.Random.cword(8,20),Mock.Random.cword(8,20),Mock.Random.cword(8,20),Mock.Random.cword(8,20),Mock.Random.cword(8,20)],
            "image|+1":[Mock.Random.image("100x100",Mock.Random.color()),Mock.Random.image("100x100",Mock.Random.color()),Mock.Random.image("100x100",Mock.Random.color()),Mock.Random.image("100x100",Mock.Random.color()),Mock.Random.image("100x100",Mock.Random.color()),Mock.Random.image("100x100",Mock.Random.color())],
            'all|+1': [Mock.Random.integer(20,50),Mock.Random.integer(20,50),Mock.Random.integer(20,50),Mock.Random.integer(20,50),Mock.Random.integer(20,50),Mock.Random.integer(20,50)],
            'study|+1': [Mock.Random.integer(0,20),Mock.Random.integer(0,20),Mock.Random.integer(0,20),Mock.Random.integer(0,20),Mock.Random.integer(0,20),Mock.Random.integer(0,20)]
        }
    ]
  });
