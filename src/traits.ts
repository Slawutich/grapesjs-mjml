import type { Editor } from 'grapesjs';
import { RequiredPluginOptions } from '.';

export default (editor: Editor, opts: RequiredPluginOptions) => {
  
  editor.TraitManager.addType('file', {
    createInput({ trait }) {
      const el = document.createElement('div');
      el.style.display = 'flex';
      el.style.alignItems = 'center';
      el.style.gap = '5px';

      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'gjs-field';
      input.style.flex = '1';
      input.value = trait.getValue();
      input.onchange = () => {
        trait.setValue(input.value);
      };

      const button = document.createElement('button');
      button.innerHTML = 'Select';
      button.className = 'gjs-btn-prim';
      button.onclick = () => {
        const am = editor.AssetManager;
        am.open({
          //types: ['image'],
          select(asset, complete) {
            const url = asset.getSrc();
            input.value = url;
            trait.setValue(url);
            if (complete) am.close();
          }
        });
      };

      el.appendChild(input);
      el.appendChild(button);
      return el;
    },

    onUpdate({ trait, elInput }) {
      const input = elInput.querySelector('input');
      if (input) {
        input.value = trait.getValue();
      }
    },
  });

};
