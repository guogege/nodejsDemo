/**
 * Created by zhang on 2016/3/2.
 */

/**
 1. ǰ�� readfile writefile �Ƚ��ļ������Ķ��뻺����
 1. ռ���ڴ�
 2. �ٶȵĿ���
 2.��
 ����һ������ģ��������յ�����ݴ����ֶ�
 �������д������ݵ�ʱ�������Ƚ�����ת��Ϊ�����ݣ�Ҳ�����ֽ����顣
 ��ͨ�����Ĵ��䣬����Ŀ�ĵغ���ת��(�������ͺͱ���)ԭʼ�����ݡ�
 3����һ���ӿڣ���ͬ��ҵ���в�ͬ��ʵ��
 stream.Readable ����һ���ӿ�
 fs ReadStream
 http.IncomingMessage �ͻ��������ͻ�����Ӧrequest response
 process.stdin
 process.stderr

 **/

var fs = require('fs');
// 34
var rs = fs.createReadStream('65.txt',{highWaterMark:64*1024});
/**
 * 1. ReadStream �̳�EventEmitter
 * 2. open ������ļ�
 * 3. read ����64k���ݵ� buffer,����data�¼�
 *
 * ����ģʽ
 */
rs.setEncoding('utf8');
rs.on('open',function(data){
    console.log('���ļ�');
});
rs.pause();
setTimeout(function(){
    rs.resume();
},5000);
rs.on('data',function(data){
    console.log('data');
});
rs.on('close',function(){
    console.log('�ر��ļ�');
});
rs.on('error',function(){
    console.log('��ȡ�ļ�����');
});
