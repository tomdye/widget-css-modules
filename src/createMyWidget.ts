import { Widget, DNode, WidgetState } from 'dojo-widgets/interfaces';
import createWidgetBase from 'dojo-widgets/createWidgetBase';
import d from 'dojo-widgets/d';
import * as css from './styles/my-widget.module.styl';
// import * as defaultTheme from './themes/default/my-widget.module.styl';
// import { assign } from 'dojo-core/lang';

export type MyWidgetTheme = {
	root: string;
	strong: string;
}

export type MyWidgetState = WidgetState & {
	theme: MyWidgetTheme;
}
export type MyWidget = Widget<MyWidgetState>

const createMyWidget = createWidgetBase.override({
	getChildrenNodes(this: MyWidget): DNode[] {
		return [
			d(`div.${css.root}`, [
				'Hello,',
				d(`span.${css.strong}`, [ 'Dojo' ]),
				'World!'
			])
		];
	}
});

export default createMyWidget;