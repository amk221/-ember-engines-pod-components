import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import engineResolverFor from 'ember-engines/test-support/engine-resolver-for';

const modulePrefix = 'foo';
const resolver = engineResolverFor(modulePrefix);

module('Integration | Component | my-component', function(hooks) {
  setupRenderingTest(hooks, { resolver });

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<MyComponent />`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      <MyComponent>
        template block text
      </MyComponent>
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
