import React from "react";
import { ImStatsBars } from "react-icons/im";

const Nav = () => {
  return (
    <header className="container max-w-2xl px-6 py-6 mx-auto">
      <div className="flex items-center justify-between">
        {/* User Information */}
        <div className="flex items-center gap-2">
          {/* img */}
          <div className="h-[40px] w-[40px] rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://scontent.fyvr1-1.fna.fbcdn.net/v/t31.18172-8/1490904_698721330168867_2069051041_o.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=AxvTGztWsIwAX840_u9&tn=AmocjGl2lpRv3oPr&_nc_ht=scontent.fyvr1-1.fna&oh=00_AfAZGZDjugXuB-UoWP5_iP5LtUwKAXbj0kbU-KjTtQml9g&oe=64257392"
              alt="profile image"
            />
          </div>

          {/* name */}
          <small>Daniel</small>
        </div>

        {/* Right side of our navigation */}
        <nav className="flex item-center gap-4">
          <div>
            <ImStatsBars className="text-4xl" />
          </div>
          <div>
            <button className="btn btn-danger">Sign out</button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
