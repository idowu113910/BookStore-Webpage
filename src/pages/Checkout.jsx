import React from "react";
import arr from "../assets/arr back.png";
import one from "../assets/1.png";
import two from "../assets/two.png";
import mc from "../assets/master card.png";
import np from "../assets/new payment.png";
import cn from "../assets/card number.png";
import { IoIosCheckboxOutline } from "react-icons/io";
import ux from "../assets/ux 4 checkout.png";
import { PiNumberTwo } from "react-icons/pi";
import { PiNumberOneBold } from "react-icons/pi";
import { MdRemove } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import crime from "../assets/crime checkout.png";
import { TbCircleNumber1Filled } from "react-icons/tb";
import { TbCircleNumber2Filled } from "react-icons/tb";
import { PiCreditCardDuotone } from "react-icons/pi";
import { SiMastercard } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../store/CartStore"; // <- important

const Checkout = () => {
  const navigate = useNavigate();

  // read from the same store as Cart
  const cartItems = useCartStore((s) => s.cartItems) || [];
  const removeFromCart = useCartStore((s) => s.removeFromCart);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const getTotalPrice = useCartStore((s) => s.getTotalPrice);

  const subtotal = Number(getTotalPrice?.() || 0);

  const formatCurrency = (value) => {
    const num = Number(value) || 0;
    return `₦${num.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    })}`;
  };

  const handleDecrease = (item) => {
    const current = Number(item.quantity || 1);
    const newQty = Math.max(1, current - 1);
    updateQuantity(item.id, newQty);
  };

  const handleIncrease = (item) => {
    const current = Number(item.quantity || 1);
    const newQty = current + 1;
    updateQuantity(item.id, newQty);
  };

  return (
    <div className="">
      <div className="flex p-6">
        <img
          onClick={() => navigate("/cart")}
          src={arr}
          alt="Back to cart"
          className="md:w-[48px] md:h-[48px] md:mt-8 md:ml-14 cursor-pointer"
        />

        <h4 className="flex mx-auto font-medium text-[36px] md:text-[57px] pr-8">
          Checkout
        </h4>
      </div>

      <div className=" mx-auto border-b border-[#FFDDD1] w-[345px] md:w-[1241px]   pb-4">
        <div className="flex justify-between w-[360px] md:w-[1241px] px-3 md:px-58 mt-9  ">
          <div className="flex gap-1.5 md:gap-0">
            <TbCircleNumber1Filled className="w-[24px] md:w-[42px] md:h-[42px] h-[24px] mt-0.5" />
            <p className="text-[12px] md:text-[16px] font-medium text-[#1D2026] mt-1 md:mt-2.5">
              Shopping Cart
            </p>
          </div>

          <div className="flex gap-1.5">
            <TbCircleNumber2Filled className="w-[24px] md:w-[42px] md:h-[42px] h-[24px] mt-0.5" />
            <p className="text-[12px] md:text-[16px] font-medium text-[#1D2026] mt-1 md:mt-2.5">
              Checkout details
            </p>
          </div>
        </div>
      </div>

      <div className="md:flex md:flex-col md:w-[689px] md:text-start md:justify-start">
        {/* Contact + Payment columns (unchanged) */}
        <div className="border-[0.27px] md:border-[0.5px] border-[#6C7275] w-[361px] md:w-[689px] h-[156.85px] md:h-[312px] rounded-[12.76px] md:rounded-[24px] p-[21.27px] md:p-[40px] mx-auto mt-6 md:mt-16 md:ml-20">
          <h5 className="font-semibold text-[16px] md:text-[32px] text-[#1D2026] md:-mt-5">
            Contact Information
          </h5>

          <div className="flex mt-1.5 md:mt-6 gap-2 md:gap-3.5">
            <div className="">
              <p className="text-[10px] md:text-[14px] font-normal text-[#1D2026]">
                Last Name
              </p>
              <input
                type="text"
                placeholder="First name"
                className="w-[154.94px] md:w-[296.5px] mt-0.5 border-[0.53px] h-[25.22px] md:h-[48px] rounded-[4.25px] border-[#E9EAF0] placeholder:text-[#8C94A3] text-[8px] md:text-[16px] p-2 md:p-4 md:mt-1.5 outline-none"
              />
            </div>

            <div>
              <p className="text-[10px] md:text-[14px] font-normal text-[#1D2026]">
                First Name
              </p>
              <input
                type="text"
                placeholder="First name"
                className="w-[154.94px] md:w-[296.5px] mt-0.5 border-[0.53px] h-[25.22px] md:h-[48px] rounded-[4.25px] border-[#E9EAF0] placeholder:text-[#8C94A3] text-[8px] md:text-[16px] p-2 md:p-4 md:mt-1.5 outline-none"
              />
            </div>
          </div>

          <div className="flex mt-1.5 md:mt-3 gap-2 md:gap-3.5">
            <div className="">
              <p className="text-[10px] md:text-[14px] font-normal text-[#1D2026]">
                Phone Number
              </p>
              <input
                type="text"
                placeholder="Phone Number"
                className="w-[154.94px] md:w-[296.5px] mt-0.5 border-[0.53px] h-[25.22px] md:h-[48px] rounded-[4.25px] border-[#E9EAF0] placeholder:text-[#8C94A3] text-[8px] md:text-[16px] p-2 md:p-4 md:mt-1.5 outline-none"
              />
            </div>

            <div>
              <p className="text-[10px] md:text-[14px] font-normal text-[#1D2026]">
                Email Address
              </p>
              <input
                type="text"
                placeholder="Email"
                className="w-[154.94px] md:w-[296.5px] mt-0.5 border-[0.53px] h-[25.22px] md:h-[48px] rounded-[4.25px] border-[#E9EAF0] placeholder:text-[#8C94A3] text-[8px] md:text-[16px] p-2 md:p-4 md:mt-1.5 outline-none"
              />
            </div>
          </div>
        </div>

        <div className="md:flex">
          <div className="w-[361px] md:w-[689px] h-[316.85px] md:h-[594px] rounded-[12.76px] md:rounded-[24px] border-[0.27px] md:border-[0.5px] border-[#6C7275] mx-auto p-[21.27px] md:p-[40px] mt-6 md:flex md:flex-col md:items-start md:justify-start md:ml-20">
            <h4 className="text-[16px] md:text-[32px] font-semibold text-[#1D2026] leading-[21.27px]">
              Payment Method
            </h4>

            <div className="w-[318.47px] md:w-[609px] h-[27.65px] md:h-[52px] rounded-[4.25px] md:rounded-[8px] border-[0.53px] md:border-[1px] border-[#E9EAF0] py-[5.32px] md:py-[10px] px-[12.76px] md:px-[24px] flex gap-10 md:gap-18 mt-3 md:mt-9">
              <div className="flex items-center">
                <div className="w-2.5 md:w-5 h-2.5 md:h-5 bg-[#EB001B] rounded-full mix-blend-multiply"></div>
                <div className="w-2.5 md:w-5 h-2.5 md:h-5 bg-[#F79E1B] rounded-full -ml-1 md:-ml-2 mix-blend-multiply"></div>
              </div>

              <p className="text-[8px] md:text-[14px] md:mt-[6px] font-normal text-[#4E5566]">
                5795 **** **** ****
              </p>

              <p className="text-[8px] md:text-[14px] md:mt-1 font-normal text-[#4E5566]">
                04/24
              </p>

              <p className="text-[8px] md:text-[14px] md:mt-1 font-normal text-[#4E5566]">
                Mark Essien
              </p>
            </div>

            <div className="w-[318.47px] md:w-[609px] h-[27.65px] md:h-[52px] border-[0.53px] border-[#23BD33] gap-4 rounded-[4.25px] flex p-1 md:p-2 mt-3 md:mt-5">
              <PiCreditCardDuotone className="w-[17.01px] md:w-[32px] h-[17.01px] md:h-[32px] ml-2 text-[#FF6636]" />

              <p className="text-[8px] md:text-[14px] font-normal text-[#4E5566] mt-0.5 md:mt-1.5">
                New Payment Cards
              </p>
            </div>

            <div className="mt-3 md:mt-5">
              <h5 className="text-[10px] md:text-[14px] font-normal text-[#1D2026] ">
                Name
              </h5>

              <input
                type="text"
                placeholder="Name on card"
                className="w-[318.47px] md:w-[609px] h-[25.22px] md:h-[48px] p-2 md:p-4 border-[0.53px] md:border-[1px] border-[#E9EAF0] placeholder:text-[#8C94A3] text-[8px] md:text-[16px]  font-normal rounded-[4.25px] md:rounded-[8px] md:mt-1.5 outline-none"
              />
            </div>

            <div className="mt-3 md:mt-4.5">
              <h5 className="text-[10px] md:text-[14px] font-normal text-[#1D2026]">
                Card Number
              </h5>

              <div className="flex w-[318.47px] md:w-[609px] h-[25.22px] md:h-[48px] rounded-[4.25px] md:rounded-[8px] border-[0.53px] border-[#E9EAF0] p-1  mt-1.5">
                <PiCreditCardDuotone className="w-[10.63px] md:w-[20px] h-[10.63px] md:h-[20px] ml-1.5 md:ml-2.5 mt-0.5 md:mt-2.5 text-[#FF6636]" />
                <input
                  type="text"
                  placeholder="Label"
                  className="placeholder:text-[#8C94A3] md:w-[609px]  text-[8px] md:text-[16px] font-normal pl-2 md:pl-5 outline-none"
                />
              </div>
            </div>

            <div className="flex gap-2 md:gap-4 mt-2.5 md:mt-4">
              <div>
                <p className="text-[#1D2026] text-[10px] md:text-[14px] font-normal">
                  MM/YY
                </p>
                <input
                  type="text"
                  placeholder="MM / YY"
                  className="w-[154.94px] md:w-[296.5px] p-2.5 md:p-3.5 h-[25.22px] md:h-[48px] rounded-[4.25px] md:rounded-[8px] border-[0.53px] border-[#E9EAF0] placeholder:text-[#8C94A3] text-[8px] md:text-[16px] md:mt-2  outline-none "
                />
              </div>

              <div>
                <p className="text-[#1D2026] text-[10px] md:text-[14px] font-normal">
                  CVC
                </p>
                <input
                  type="text"
                  placeholder="Security Code"
                  className="w-[154.94px] md:w-[296.5px] p-2.5 md:p-3.5 h-[25.22px] md:h-[48px] rounded-[4.25px] md:rounded-[8px] border-[0.53px] border-[#E9EAF0] placeholder:text-[#8C94A3] text-[8px] md:text-[16px] md:mt-2  outline-none"
                />
              </div>
            </div>

            <div className="flex mt-2 md:mt-5 gap-1.5 md:gap-2.5">
              <IoIosCheckboxOutline className="w-[11.7px] md:w-[22px] h-[11.7px] md:h-[22px]" />

              <p className="text-[8px] md:text-[14px] font-normal text-[#4E5566]">
                Remember this card, save it on my card list
              </p>
            </div>
          </div>

          {/* Order Summary: now dynamic from cartItems */}
          <div className="w-[361px] md:w-[406px] h-auto rounded-[17.56px] border-[0.37px] p-[29.26px] border-[#6C7275] mt-6 md:-mt-79 md:ml-16 mx-auto">
            <h6 className="font-medium text-[16px] md:text-[20px] text-[#000000]">
              Order Summary
            </h6>

            {cartItems.length === 0 ? (
              <p className="mt-4 text-[14px]">Your cart is empty.</p>
            ) : (
              <>
                <div className="mt-4 space-y-4">
                  {cartItems.map((item, index) => {
                    const qty = Number(item.quantity || 1);
                    return (
                      <div
                        key={item.id}
                        className="flex justify-between items-start w-full border-b pb-4"
                      >
                        <div className="flex">
                          <img
                            src={item.image || (index % 2 === 0 ? ux : crime)}
                            alt={item.name || "Product"}
                            className="md:w-[100.39px] md:h-[122.36px] w-[60px] h-[60px] object-cover rounded"
                          />

                          <div className="flex flex-col mt-2 w-[98.02px] ml-3">
                            <p className="font-medium text-[12px] md:text-[14px] text-[#1C1C1C] break-words">
                              {item.name}
                            </p>
                            <p className="font-normal text-[8px] md:text-[12px] text-[#73768A]">
                              {item.author || item.author || ""}
                            </p>

                            <div className="flex items-center gap-2 mt-2">
                              <button
                                onClick={() => handleDecrease(item)}
                                aria-label={`Decrease quantity for ${item.name}`}
                                className="p-2 disabled:opacity-50 border border-[#73768A] rounded-l"
                                disabled={qty <= 1}
                              >
                                <MdRemove />
                              </button>

                              <div className="px-3 py-2 border-[0.3px] border-[#73768A]">
                                <span className="text-[14px]">{qty}</span>
                              </div>

                              <button
                                onClick={() => handleIncrease(item)}
                                aria-label={`Increase quantity for ${item.name}`}
                                className="p-2 border border-[#73768A] rounded-r"
                              >
                                <IoIosAdd />
                              </button>
                            </div>
                          </div>
                        </div>

                        <p className="text-[14px] md:text-[20px] font-medium text-[#1C1C1C]">
                          {formatCurrency(item.price * qty)}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="flex justify-between border-b border-[#EAEAEA] pb-4 mt-3 md:mt-8">
                  <p className="text-[10px] md:text-[14px] font-normal text-[#6E7485]">
                    Subtotal
                  </p>
                  <p className="text-[12px] md:text-[14px] font-medium text-[#1C1C1C]">
                    {formatCurrency(subtotal)}
                  </p>
                </div>

                <div className="flex justify-between border-b border-[#EAEAEA] pb-4 mt-4 md:mt-8">
                  <p className="text-[10px] md:text-[16px] font-normal text-[#6E7485]">
                    Coupon Discount
                  </p>
                  <p className="text-[12px] md:text-[14px] font-medium text-[#1C1C1C]">
                    8%
                  </p>
                </div>

                <div className="mt-3.5 md:mt-6">
                  <h6 className="text-[12px] md:text-[14px] font-normal text-[#1D2026]">
                    Apply Coupon
                  </h6>

                  <div className="flex relative">
                    <input
                      type="text"
                      placeholder="Coupon code"
                      className="w-[302.48px] md:w-[326px] h-[34.21px] md:h-[48px] rounded-[5.85px] md:rounded-[8px] border-[0.73px] border-[#E9EAF0] mt-2 pb-1 pl-3 placeholder:text-[10px] md:placeholder:text-[16px] font-normal text-[#8C94A3] outline-none"
                    />

                    <button className="w-[44px] md:w-[72px] h-[27px] md:h-[36px] bg-[#1D2026] px-[8px] md:px-[16px] absolute left-63.5 md:left-62.5 top-3  md:top-3.5 rounded-[5.85px] md:rounded-[8px] text-[10px] md:text-[14px] text-white">
                      Apply
                    </button>
                  </div>
                </div>

                <div className="flex justify-between mt-3 md:mt-6">
                  <p className="text-[14px] md:text-[20px] font-normal text-[#1C1C1C]">
                    Total
                  </p>
                  <p className="text-[12px] md:text-[20px] font-medium text-[#1C1C1C]">
                    {formatCurrency(subtotal)}
                  </p>
                </div>

                <button className="bg-[#FF6636] text-white w-[302.48px] md:w-[326px] h-[38.63px] md:h-[52px] py-[7.32px] md:py-[10px] px-[11.7px] md:px-[16px] rounded-[5.85px] md:rounded-[8px] mt-4 md:mt-8 text-[14px] md:text-[16px] font-medium">
                  Complete Payment
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
