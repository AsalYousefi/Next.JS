"use client";
export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex">
                <div>
                    <span className="text-uppercase">en</span>
                    <img src="/images/arrow down.svg" alt="" />
                </div>
                <div>
                    <span className="text-uppercase">usd</span>
                    <img src="/images/arrow down.svg" alt="" />
                </div>
            </div>
            <div className="d-flex">
                <div>
                    <img src="/images/profile_close_2.svg" alt="" />
                    <span>My profile</span>
                </div>
                <div className="position-relative">
                    <img src="/images/Group.svg" alt="" />
                    <div className="rounded-circle position-absolute"></div>
                </div>
                <div>Items</div>
            </div>
        </div>
        <div></div>
      </div>
    </header>
  );
}
