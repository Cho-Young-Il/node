/**
 * Node.js 애플리케이션 : 1개의 싱글쓰래드
 * 멀티 코어 시스템의 장점을 살리기 : 클러스터
 * Node.js클러스터
 *  - 클러스터 사용시 포트 공유 : 서버 작성 편리
 *  - 코어(프로세서)의 개수 만큼 사용
 */
/**
 * 클러스터
 * 클러스터링 : 마스터와 워커프로세스
 * 마스터 : 메인프로세스, 워커 생성
 * 워커 : 보조 프로세스, 마스터가 생성
 */

// const cluster = require('cluster');
// cluster.fork();
// cluster.isMaster
// cluster.isWorker

// if (cluster.isMaster) {
// 	// 마스터 코드
// 	cluster.fork();
// } else {
// 	// 워커 코드
// }

/**
 * 클러스터(마스터)의 이벤트
 * fork : 워커 생성 이벤트
 * online : 워커 생성 후 동작하는 이벤트
 * listening : 워커에 작성한 서버의 listen 이벤트
 * disconnect : 워커 연결 종료
 * exit : 워커 프로세스 종료
 *
 * 워커의 이벤트
 * message : 메세지 이벤트
 * disconnect : 워커 연결 종료
 */

//워커 접근
//cluster.worker
//
//워커 식별자
//worker.id
//
//워커 종료
//worker.kill([signal='SIGTERM'])

// const cluster = require('cluster');

// if (cluster.isMaster) {
// 	cluster.fork();
// 	cluster.on('online', (worker) => {
// 		//워커 생성 후 실행
// 		console.log('Worker #' + worker.id + ' is Online');
// 	});

// 	cluster.on('exit', (worker, code, signal) => {
// 		//워커 종료 이벤트
// 		console.log('Worker #' + worker.id + ' exit');
// 	});
// } else {
// 	const worker = cluster.worker;
// 	//워커 종료
// 	worker.kill();
// }





// // 서버에 클러스터 적용
// const cluster = require('cluster');
// if (cluster.isMaster) {
// 	cluster.fork();
// } else {
// 	http.createServer((req, res) => {
// 		//서버 코드
// 	}).listen(8000);
// }


/**
 * 마스터가 워커에게 데이터 전달
 * worker.send(data)
 *
 * 워커의 데이터 이벤트
 * worker.on('message', (data) => {
 * });
 *
 *
 * 워커가 마스터에게 데이터 전달
 * process.send(data)
 *
 * 마스터에서의 데이터 이벤트
 * var worker = cluster.fork();
 * worker.on('message', (data) => {
 * });
 */
// const cluster = require('cluster');

// if (cluster.isMaster) {
// 	const worker = cluster.fork();
// 	worker.on('message', (message) => {
// 		console.log('Master received : ', message);
// 	});

// 	cluster.on('online', (worker) => {
// 		console.log('Master send : ', {message: 'Hello Worker'});
// 		worker.send({message: 'Hello Worker'});
// 	});
// } else {
// 	const worker = cluster.worker;

// 	worker.on('message', (message) => {
// 		console.log('Worker received : ', message);
// 		console.log('Worker send : ', {message: 'Fine thank you'});
// 		process.send({message: 'Fine thank you'});
// 	});
// }












