import React from "react";
import { Star, Play, ExternalLink, ArrowRight } from "lucide-react";

const TestimonialsSection = () => {
  const videoTestimonials = [
    {
      title: "From Zero to Profitable Trader",
      thumbnail:
        "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400",
      duration: "3:45",
      student: "Rajesh Kumar",
    },
    {
      title: "My Trading Success Story",
      thumbnail:
        "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400",
      duration: "4:20",
      student: "Priya Sharma",
    },
    {
      title: "How I Achieved Financial Freedom",
      thumbnail:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
      duration: "5:15",
      student: "Amit Patel",
    },
  ];

  const googleReviews = [
    {
      name: "Rohit Mehta",
      rating: 5,
      review:
        "Outstanding teaching methodology. The practical approach and real-time market analysis sessions are invaluable.",
      date: "2 weeks ago",
    },
    {
      name: "Sneha Gupta",
      rating: 5,
      review:
        "Best trading academy in Nagpur! The mentors are extremely knowledgeable and supportive.",
      date: "1 month ago",
    },
    {
      name: "Vikash Singh",
      rating: 5,
      review:
        "Excellent course structure and personalized attention. Highly recommend for serious traders.",
      date: "3 weeks ago",
    },
  ];

  const instagramComments = [
    {
      username: "@trading_enthusiast",
      comment:
        "Amazing content! Your strategies really work in live markets 🔥",
      likes: 24,
    },
    {
      username: "@market_learner",
      comment:
        "Thank you for the detailed explanation. Finally understood risk management properly! 💯",
      likes: 18,
    },
    {
      username: "@future_trader",
      comment: "Best trading education content on Instagram. Keep it up! 📈",
      likes: 31,
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
              Learners Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real success stories from our students across video testimonials,
            Google reviews, and social media
          </p>
        </div>

        {/* Video Testimonials */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Hear from Our Students
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoTestimonials.map((video, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-green-300 transition-all duration-300 cursor-pointer hover:transform hover:-translate-y-1 shadow-sm hover:shadow-lg"
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-green-500/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="text-white ml-1" size={24} />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/80 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-gray-900 font-semibold mb-2">
                    {video.title}
                  </h4>
                  <p className="text-gray-600 text-sm">by {video.student}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Google Reviews */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Google Reviews
            </h3>
            <div className="flex items-center justify-center space-x-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-green-500 fill-current"
                    size={20}
                  />
                ))}
              </div>
              <span className="text-xl font-bold text-gray-900">4.9/5</span>
              <span className="text-gray-600">(127 reviews)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {googleReviews.map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-green-300 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-gray-900 font-semibold">{review.name}</h4>
                  <div className="flex space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-green-500 fill-current"
                        size={14}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3 text-sm">
                  "{review.review}"
                </p>
                <p className="text-gray-500 text-xs">{review.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Instagram Comments */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Instagram Comments
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {instagramComments.map((comment, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-green-300 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-green-600 font-semibold text-sm">
                    {comment.username}
                  </h4>
                  <span className="text-gray-500 text-xs">
                    ❤️ {comment.likes}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {comment.comment}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href="/testimonials"
            className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-green-600/25 transform hover:scale-105"
          >
            <span>View All Testimonials</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;