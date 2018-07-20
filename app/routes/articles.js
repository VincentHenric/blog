import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let article1 = this.store.createRecord('article', {
      title: 'Title of the article 1',
      createdAt: new Date('2018-02-01'),
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> Maecenas \n ac justo neque. Nulla eu euismod nisl. Maecenas vestibulum a arcu ac pharetra. Proin sollicitudin augue quis laoreet semper. Pellentesque in lacus non eros condimentum feugiat. Integer sodales consequat justo, eu sodales orci lacinia nec. Quisque ipsum dolor, viverra eget viverra at, cursus vitae est. Etiam accumsan augue vitae tortor sagittis, at volutpat eros ultrices. Donec pretium massa ut finibus ultrices. Vestibulum mattis arcu sed urna mattis, et auctor elit finibus. Nunc malesuada, diam at ultricies fermentum, justo eros aliquet leo, eget accumsan risus lorem non lacus. Morbi dictum, ipsum id rhoncus porta, elit ante sodales ex, eu tempus nunc diam quis tellus. Curabitur est nunc, malesuada eu eros non, dignissim malesuada est. Donec sollicitudin eget risus quis fringilla. Proin sit amet velit elementum, porta leo sit amet, sodales velit. Quisque aliquet efficitur tortor id lobortis.'
    })
    let article2 = this.store.createRecord('article', {
      title: 'Title of the article 2',
      createdAt: new Date('2018-05-19'),
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac justo neque. Nulla eu euismod nisl. Maecenas vestibulum a arcu ac pharetra. Proin sollicitudin augue quis laoreet semper. Pellentesque in lacus non eros condimentum feugiat. Integer sodales consequat justo, eu sodales orci lacinia nec. Quisque ipsum dolor, viverra eget viverra at, cursus vitae est. Etiam accumsan augue vitae tortor sagittis, at volutpat eros ultrices. Donec pretium massa ut finibus ultrices. Vestibulum mattis arcu sed urna mattis, et auctor elit finibus. Nunc malesuada, diam at ultricies fermentum, justo eros aliquet leo, eget accumsan risus lorem non lacus. Morbi dictum, ipsum id rhoncus porta, elit ante sodales ex, eu tempus nunc diam quis tellus. Curabitur est nunc, malesuada eu eros non, dignissim malesuada est. Donec sollicitudin eget risus quis fringilla. Proin sit amet velit elementum, porta leo sit amet, sodales velit. Quisque aliquet efficitur tortor id lobortis.'
    })
    let article3 = this.store.createRecord('article', {
      title: 'Title of the article 3',
      createdAt: new Date('2018-07-20'),
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac justo neque. Nulla eu euismod nisl. Maecenas vestibulum a arcu ac pharetra. Proin sollicitudin augue quis laoreet semper. Pellentesque in lacus non eros condimentum feugiat. Integer sodales consequat justo, eu sodales orci lacinia nec. Quisque ipsum dolor, viverra eget viverra at, cursus vitae est. Etiam accumsan augue vitae tortor sagittis, at volutpat eros ultrices. Donec pretium massa ut finibus ultrices. Vestibulum mattis arcu sed urna mattis, et auctor elit finibus. Nunc malesuada, diam at ultricies fermentum, justo eros aliquet leo, eget accumsan risus lorem non lacus. Morbi dictum, ipsum id rhoncus porta, elit ante sodales ex, eu tempus nunc diam quis tellus. Curabitur est nunc, malesuada eu eros non, dignissim malesuada est. Donec sollicitudin eget risus quis fringilla. Proin sit amet velit elementum, porta leo sit amet, sodales velit. Quisque aliquet efficitur tortor id lobortis.'
    })
    return [article1, article2, article3];
  }
});
