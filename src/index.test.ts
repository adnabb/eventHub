import EventHub from './index';
// import EventHub from './index_old';
import * as chai from 'chai';
const expect= chai.expect;
describe('event hub', () => {
  it('存在', () => {
    expect(EventHub).to.exist
  });
  it('可以发布和订阅事件', () => {
    const eventHub = new EventHub();
    let called = false;
    eventHub.emit('楚天都市报', () => {
      called = true
    });
    eventHub.on('楚天都市报');
    expect(called).to.equal(true);
  });
  it('可以取消订阅事件', () => {
    const eventHub = new EventHub();
    let called = false;
    const fn = () => {
      called = true
    };
    eventHub.emit('楚天都市报', fn);
    eventHub.off('楚天都市报', fn);
    eventHub.on('楚天都市报');
    expect(called).to.equal(false);
  });
});