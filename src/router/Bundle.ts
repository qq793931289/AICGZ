import React, { Component } from 'react';

export interface BundleProps {
  load: any;
}

class Bundle extends React.Component<BundleProps>{

  constructor(props: any) {
    super(props);

  }

  public state = {
    // short for "module" but that's a keyword in js, so "mod"
    mod: null
  };

  public componentWillMount() {
    this.load(this.props)
  }

  public componentWillReceiveProps(nextProps: any) {
    if (nextProps.load !== (this.props as any).load) {
      this.load(nextProps)
    }
  }

  public load(props: any) {
    this.setState({
      mod: null
    });
    props.load((mod: any) => {
      this.setState({
        // handle both es imports and cjs
        mod: mod.default ? mod.default : mod
      })
    })
  }

  render() {
    return this.props.children(this.state.mod)
  }
}

export default Bundle;