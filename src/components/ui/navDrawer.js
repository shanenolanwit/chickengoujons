import React from "react";
import Drawer from "@material-ui/core/Drawer";
import { Link} from 'react-router-dom'

export class NavDrawer extends React.Component {
  render() {
    return (
      <Drawer
        anchor="left"
        open={this.props.drawerOpened}
        onClose={this.props.toggleDrawer(false)}
      >
        <div
          onClick={this.props.toggleDrawer(false)}
          onKeyDown={this.props.toggleDrawer(false)}
        >
          <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/goujons">Goujons</Link>
        </li>
        <li>
          <Link to="/machinelearning">Machine Learning</Link>
        </li>
        <li>
          <Link to="/thesis">Thesis</Link>
        </li>
      </ul>
        </div>
      </Drawer>
    );
  }
}
