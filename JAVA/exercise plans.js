   // Get current logged-in user
    function getCurrentUser() {
      try {
        const userStr = localStorage.getItem('nutrifit_user');
        if (!userStr) {
          alert('You must be logged in to access this page.');
          window.location.href = 'login.html';
          return null;
        }
        return JSON.parse(userStr);
      } catch (e) {
        alert('Session error. Please log in again.');
        window.location.href = 'login.html';
        return null;
      }
    }

    const currentUser = getCurrentUser();
    if (!currentUser) throw new Error('No user logged in');

    const workoutPlans = [
      // LOSE WEIGHT PLANS
      {
        title: "Fat Burn Circuit",
        goal: "Lose Weight",
        difficulty: "beginner",
        description: "High-rep, low-rest circuit training to maximize calorie burn. Perfect for beginners looking to shed pounds and build endurance.",
        image: "https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=800",
        duration: "4 weeks",
        days: "3-4",
        intensity: "Moderate",
        exercises: [
          "Jumping Jacks",
          "Mountain Climbers",
          "Burpees",
          "High Knees",
          "Bodyweight Squats"
        ],
        steps: [
          {
            title: "Warm-up (5-10 minutes)",
            description: "Start with light cardio like jogging in place or arm circles. Gradually increase intensity to prepare your body and prevent injuries."
          },
          {
            title: "Circuit Training (20-25 minutes)",
            description: "Perform each exercise for 30 seconds with 15 seconds rest between exercises. Complete 3-4 rounds of the circuit. Focus on maintaining proper form over speed."
          },
          {
            title: "Active Recovery (2 minutes)",
            description: "Walk around between circuits to maintain elevated heart rate while allowing muscles to recover. Stay hydrated throughout."
          },
          {
            title: "Cool Down (5 minutes)",
            description: "Slow walking followed by static stretching. Focus on major muscle groups worked during the session."
          }
        ],
        tips: [
          "Maintain consistent breathing throughout - never hold your breath",
          "Start with shorter work periods (20 seconds) if needed",
          "Track your progress and gradually increase intensity",
          "Rest 24-48 hours between sessions for recovery"
        ]
      },
      {
        title: "Cardio & Strength Combo",
        goal: "Lose Weight",
        difficulty: "intermediate",
        description: "Blend of cardio intervals and strength training to burn fat while maintaining muscle mass.",
        image: "https://images.pexels.com/photos/3076514/pexels-photo-3076514.jpeg?auto=compress&cs=tinysrgb&w=800",
        duration: "6 weeks",
        days: "4-5",
        intensity: "High",
        exercises: [
          "Running Intervals",
          "Kettlebell Swings",
          "Box Jumps",
          "Battle Ropes",
          "Dumbbell Thrusters"
        ],
        steps: [
          {
            title: "Dynamic Warm-up (10 minutes)",
            description: "Leg swings, arm circles, bodyweight squats, and light jogging. Activate all major muscle groups before intense training."
          },
          {
            title: "Cardio Intervals (15 minutes)",
            description: "Sprint/run for 1 minute at high intensity, followed by 1 minute recovery walk. Repeat 7-8 times. Maintain 80-90% max heart rate during sprints."
          },
          {
            title: "Strength Circuit (20 minutes)",
            description: "Perform 3-4 sets of each strength exercise with 12-15 reps. Rest 30-45 seconds between sets. Focus on explosive power and controlled movements."
          },
          {
            title: "Metabolic Finisher (5 minutes)",
            description: "High-intensity circuit of kettlebell swings and battle ropes. 30 seconds work, 15 seconds rest for 5 rounds to maximize calorie burn."
          },
          {
            title: "Cool Down & Stretch (10 minutes)",
            description: "Light jog tapering to walk, followed by comprehensive stretching routine targeting all worked muscle groups."
          }
        ],
        tips: [
          "Combine cardio and strength in same session for optimal fat burning",
          "Ensure proper nutrition with adequate protein to preserve muscle",
          "Monitor heart rate to stay in fat-burning zone (70-85% max)",
          "Take one full rest day between sessions"
        ]
      },
      {
        title: "Fat Shredder",
        goal: "Lose Weight",
        difficulty: "advanced",
        description: "Intense HIIT protocol designed for maximum fat loss. Advanced metabolic conditioning for rapid results.",
        image: "https://images.pexels.com/photos/4162487/pexels-photo-4162487.jpeg?auto=compress&cs=tinysrgb&w=800",
        duration: "8 weeks",
        days: "5-6",
        intensity: "Very High",
        exercises: [
          "Sprint Intervals",
          "Burpee Pull-ups",
          "Sled Push",
          "Assault Bike",
          "Plyometric Circuits"
        ],
        steps: [
          {
            title: "Intensive Warm-up (12 minutes)",
            description: "Progressive warm-up including mobility drills, dynamic stretches, and gradual intensity build-up. Prepare nervous system for explosive movements."
          },
          {
            title: "HIIT Protocol (25 minutes)",
            description: "Tabata-style training: 20 seconds maximum effort, 10 seconds rest. Rotate through exercises for 8 rounds each. Push to absolute limits during work periods."
          },
          {
            title: "Metabolic Conditioning (15 minutes)",
            description: "Complex movements like burpee pull-ups and sled pushes. Perform EMOM (Every Minute On the Minute) format - complete reps within 60 seconds, rest remainder."
          },
          {
            title: "Finisher Circuit (8 minutes)",
            description: "All-out effort on assault bike or plyometric circuit. 40 seconds maximum intensity, 20 seconds active recovery for 8 rounds total."
          },
          {
            title: "Extended Recovery (15 minutes)",
            description: "Gradual cool-down with foam rolling and deep stretching. Focus on recovery techniques to prevent overtraining."
          }
        ],
        tips: [
          "This program requires solid fitness base - not for beginners",
          "Prioritize sleep (8+ hours) and nutrition for recovery",
          "Include deload week every 4 weeks to prevent burnout",
          "Monitor heart rate variability to assess recovery status",
          "Consider working with a coach for optimal results"
        ]
      },

      // FULL BODY PLANS
      {
        title: "Total Body Foundation",
        goal: "Full Body",
        difficulty: "beginner",
        description: "Complete full-body workout hitting all major muscle groups. Build balanced strength and improve overall fitness.",
        image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800",
        duration: "6 weeks",
        days: "3",
        intensity: "Moderate",
        exercises: [
          "Goblet Squats",
          "Push-ups",
          "Dumbbell Rows",
          "Lunges",
          "Plank"
        ],
        steps: [
          {
            title: "Preparation & Warm-up (8 minutes)",
            description: "Light cardio and joint mobility exercises. Focus on movement quality and proper form practice with no weight."
          },
          {
            title: "Lower Body Training (12 minutes)",
            description: "Goblet squats (3 sets x 10 reps) and lunges (3 sets x 8 reps per leg). Keep weight manageable, focus on full range of motion and balance."
          },
          {
            title: "Upper Body Push/Pull (12 minutes)",
            description: "Push-ups (3 sets x 8-12 reps, use knees if needed) and dumbbell rows (3 sets x 10 reps per arm). Maintain neutral spine throughout."
          },
          {
            title: "Core Stability (8 minutes)",
            description: "Plank holds (3 sets x 30-45 seconds) with proper form. Keep body in straight line, engage core, breathe naturally."
          },
          {
            title: "Cool Down (5 minutes)",
            description: "Gentle stretching for all major muscle groups worked. Hold each stretch 20-30 seconds."
          }
        ],
        tips: [
          "Master form before adding weight or increasing reps",
          "Take 48 hours rest between full-body sessions",
          "Start conservative - you can always add more later",
          "Video yourself to check form or work with a trainer"
        ]
      },
      {
        title: "Balanced Strength Builder",
        goal: "Full Body",
        difficulty: "intermediate",
        description: "Comprehensive program targeting all muscle groups with compound movements for functional strength.",
        image: "https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&w=800",
        duration: "8 weeks",
        days: "4",
        intensity: "High",
        exercises: [
          "Barbell Squats",
          "Bench Press",
          "Deadlifts",
          "Overhead Press",
          "Pull-ups"
        ],
        steps: [
          {
            title: "Movement Prep (10 minutes)",
            description: "Dynamic warm-up with band work and activation exercises. Prime the nervous system for heavy compound lifts."
          },
          {
            title: "Primary Compound Lift (15 minutes)",
            description: "Choose one main lift per session (squat, deadlift, bench, or overhead press). Perform 4-5 sets of 4-6 reps at 75-85% of 1RM. Rest 2-3 minutes between sets."
          },
          {
            title: "Secondary Compound Movement (12 minutes)",
            description: "Complementary exercise (e.g., if you squatted, do Romanian deadlifts). 3-4 sets of 8-10 reps at moderate weight."
          },
          {
            title: "Accessory Work (15 minutes)",
            description: "3-4 accessory exercises targeting weak points. Pull-ups, rows, dips, or isolation work. 3 sets x 10-12 reps each."
          },
          {
            title: "Mobility & Recovery (8 minutes)",
            description: "Targeted stretching and foam rolling for areas worked. Address any tight or problem areas."
          }
        ],
        tips: [
          "Follow progressive overload - add weight or reps weekly",
          "Alternate between upper and lower focus each session",
          "Track all lifts in a training log for accountability",
          "Eat in slight caloric surplus with 1g protein per lb bodyweight",
          "Ensure 7-9 hours quality sleep for optimal recovery"
        ]
      },
      {
        title: "Elite Full Body",
        goal: "Full Body",
        difficulty: "advanced",
        description: "Advanced full-body training with complex movements and high volume for maximum overall development.",
        image: "https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&w=800",
        duration: "12 weeks",
        days: "5",
        intensity: "Very High",
        exercises: [
          "Front Squats",
          "Weighted Pull-ups",
          "Clean and Press",
          "Bulgarian Split Squats",
          "Ring Dips"
        ],
        steps: [
          {
            title: "Comprehensive Warm-up (15 minutes)",
            description: "Thorough mobility work, activation drills, and ramping sets. Include barbell complexes and explosive movement prep."
          },
          {
            title: "Olympic/Complex Movements (20 minutes)",
            description: "Technical lifts like cleans, snatches, or complexes. 5-6 sets of 3-5 reps focusing on power and technique. Full rest between sets."
          },
          {
            title: "Primary Strength Work (20 minutes)",
            description: "Heavy compound movements (front squats, weighted pull-ups). 4-5 sets of 3-6 reps at 80-90% capacity. Emphasize perfect form under heavy load."
          },
          {
            title: "Volume Training (20 minutes)",
            description: "Higher rep work with Bulgarian split squats, ring dips, and auxiliary exercises. 4 sets x 8-12 reps to build work capacity."
          },
          {
            title: "Conditioning & Core (15 minutes)",
            description: "Metabolic conditioning circuit or heavy core work. Keep intensity high while managing fatigue."
          },
          {
            title: "Recovery Protocol (10 minutes)",
            description: "Active recovery, foam rolling, and mobility work. Include contrast therapy or ice baths when available."
          }
        ],
        tips: [
          "This is competition-level training - requires excellent technique",
          "Implement periodization: strength, hypertrophy, and power phases",
          "Consider hiring a strength coach for program design",
          "Nutrition and recovery are as important as training itself",
          "Use RPE (Rate of Perceived Exertion) to manage training intensity",
          "Schedule deload weeks every 3-4 weeks to prevent overtraining"
        ]
      },

      // MUSCLE GAIN PLANS
      {
        title: "Muscle Builder Basics",
        goal: "Muscle Gain",
        difficulty: "beginner",
        description: "Hypertrophy-focused program for beginners. Build solid muscle foundation with proven exercises.",
        image: "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=800",
        duration: "8 weeks",
        days: "4",
        intensity: "Moderate",
        exercises: [
          "Dumbbell Bench Press",
          "Lat Pulldowns",
          "Leg Press",
          "Shoulder Press",
          "Bicep Curls"
        ],
        steps: [
          {
            title: "Warm-up & Activation (10 minutes)",
            description: "Light cardio and dynamic stretches. Perform activation exercises for target muscle groups with resistance bands or light weights."
          },
          {
            title: "Primary Compound Movement (20 minutes)",
            description: "Start with main compound lift (bench press, leg press, or rows). 4 sets of 8-10 reps with 60-90 second rest. Focus on controlled eccentric (lowering) phase."
          },
          {
            title: "Secondary Compounds (15 minutes)",
            description: "2 supporting compound exercises. 3 sets of 10-12 reps each. Maintain proper form and full range of motion throughout."
          },
          {
            title: "Isolation Exercises (15 minutes)",
            description: "3-4 isolation movements targeting specific muscles. 3 sets of 12-15 reps with 45-60 second rest. Use mind-muscle connection."
          },
          {
            title: "Cool Down & Stretch (5 minutes)",
            description: "Light stretching and foam rolling for worked muscles to aid recovery."
          }
        ],
        tips: [
          "Eat 300-500 calories above maintenance for muscle growth",
          "Aim for 0.8-1g protein per pound of bodyweight",
          "Progressive overload is key - add weight or reps weekly",
          "Get 7-9 hours sleep for optimal muscle recovery",
          "Stay consistent - results come from regular training"
        ]
      },
      {
        title: "Mass Gain Protocol",
        goal: "Muscle Gain",
        difficulty: "intermediate",
        description: "Progressive overload program designed to pack on muscle mass with strategic volume and intensity.",
        image: "https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg?auto=compress&cs=tinysrgb&w=800",
        duration: "12 weeks",
        days: "5",
        intensity: "High",
        exercises: [
          "Barbell Bench Press",
          "Barbell Rows",
          "Leg Press",
          "Incline Dumbbell Press",
          "Romanian Deadlifts"
        ],
        steps: [
          {
            title: "Targeted Warm-up (12 minutes)",
            description: "Specific warm-up for muscle groups being trained. Include ramping sets with increasing weight leading to working sets."
          },
          {
            title: "Heavy Compound Work (25 minutes)",
            description: "Primary compound lifts at 75-85% 1RM. 4-5 sets of 6-8 reps with 2-3 minute rest. Push close to failure on last set of each exercise."
          },
          {
            title: "Volume Training (20 minutes)",
            description: "3-4 exercises at moderate weight. 4 sets of 10-12 reps with 90 second rest. Focus on time under tension and muscle pump."
          },
          {
            title: "High-Rep Finishing Work (12 minutes)",
            description: "2-3 isolation exercises. 3 sets of 15-20 reps with minimal rest. Push for metabolic stress and muscle fatigue."
          },
          {
            title: "Recovery Work (6 minutes)",
            description: "Stretching and light foam rolling. Consider adding BCAAs or protein shake immediately post-workout."
          }
        ],
        tips: [
          "Follow push/pull/legs split or upper/lower split for optimal recovery",
          "Increase calories gradually - aim for 0.5-1 lb gain per week",
          "Track macros: high protein (1g/lb), moderate carbs, healthy fats",
          "Vary rep ranges: 6-8 for strength, 8-12 for hypertrophy, 12-15 for pump",
          "Use progressive overload but don't sacrifice form for weight"
        ]
      },
      {
        title: "Hypertrophy Maximizer",
        goal: "Muscle Gain",
        difficulty: "advanced",
        description: "Advanced bodybuilding split for maximum hypertrophy. High volume, strategic splits, and intensity techniques.",
        image: "https://images.pexels.com/photos/3076514/pexels-photo-3076514.jpeg?auto=compress&cs=tinysrgb&w=800",
        duration: "16 weeks",
        days: "6",
        intensity: "Very High",
        exercises: [
          "Heavy Compound Lifts",
          "Drop Sets",
          "Supersets",
          "Time Under Tension",
          "Advanced Techniques"
        ],
        steps: [
          {
            title: "Muscle-Specific Activation (15 minutes)",
            description: "Targeted pre-exhaust and activation work. Blood flow restriction (BFR) training or high-rep pump sets to prime muscles."
          },
          {
            title: "Strength Phase (20 minutes)",
            description: "Heavy compound movements: 5 sets of 4-6 reps at 85-90% 1RM. Focus on progressive overload and neural adaptation."
          },
          {
            title: "Hypertrophy Volume Block (30 minutes)",
            description: "4-5 exercises using various techniques: drop sets, rest-pause, supersets. 4-5 sets of 8-12 reps per exercise. Chase the pump and metabolic stress."
          },
          {
            title: "Isolation & Intensity Techniques (20 minutes)",
            description: "Advanced methods: forced reps, negatives, partials, 21s. 3-4 isolation exercises with 3-4 sets each. Maximum muscle fiber recruitment."
          },
          {
            title: "Pump Work & Stretch (10 minutes)",
            description: "High-rep pump sets (20-30 reps) and fascial stretching. Enhance nutrient delivery and muscle fullness."
          },
          {
            title: "Recovery & Nutrition (10 minutes)",
            description: "Post-workout meal timing critical. Stretching, foam rolling, and possibly contrast showers or ice baths."
          }
        ],
        tips: [
          "Implement body part split: chest, back, shoulders, arms, legs (2 days)",
          "Caloric surplus of 500+ calories with 1.2g protein per lb bodyweight",
          "Periodize training: strength blocks, volume blocks, deload weeks",
          "Consider supplementation: creatine, EAAs, pre-workout",
          "Track body composition weekly - aim for minimal fat gain",
          "Advanced techniques should be used strategically, not every set",
          "Work with coach for program customization and form checks"
        ]
      },

      // PHYSICALLY FIT PLANS
      {
        title: "Fitness Fundamentals",
        goal: "Physically Fit",
        difficulty: "beginner",
        description: "Well-rounded program improving cardiovascular health, strength, and flexibility for overall fitness.",
        image: "https://images.pexels.com/photos/3822166/pexels-photo-3822166.jpeg?auto=compress&cs=tinysrgb&w=800",
        duration: "6 weeks",
        days: "3-4",
        intensity: "Moderate",
        exercises: [
          "Brisk Walking",
          "Bodyweight Exercises",
          "Yoga/Stretching",
          "Light Cardio",
          "Core Work"
        ],
        steps: [
          {
            title: "Cardiovascular Component (20 minutes)",
            description: "Brisk walking, light jogging, or cycling. Maintain conversational pace where you can still talk comfortably. Aim for 60-70% max heart rate."
          },
          {
            title: "Bodyweight Strength (15 minutes)",
            description: "Basic exercises like squats, push-ups (modified if needed), lunges, and planks. 2-3 sets of 10-15 reps each. Focus on proper form."
          },
          {
            title: "Core Stability (10 minutes)",
            description: "Planks, bird dogs, dead bugs, and bridges. Hold positions for 20-30 seconds. Build foundational core strength for daily activities."
          },
          {
            title: "Flexibility & Mobility (15 minutes)",
            description: "Yoga-based stretches or gentle mobility work. Target all major joints and muscle groups. Hold stretches 20-30 seconds each."
          }
        ],
        tips: [
          "Consistency over intensity - showing up is most important",
          "Gradually increase duration and intensity week by week",
          "Listen to your body - rest when needed",
          "Stay hydrated and eat balanced meals",
          "Find activities you enjoy for long-term adherence"
        ]
      },
      {
        title: "Athletic Performance",
        goal: "Physically Fit",
        difficulty: "intermediate",
        description: "Sport-specific training to enhance athletic performance, agility, and functional movement patterns.",
        image: "https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=800",
        duration: "10 weeks",
        days: "5",
        intensity: "High",
        exercises: [
          "Agility Drills",
          "Plyometrics",
          "Speed Work",
          "Functional Movements",
          "Sport-Specific Training"
        ],
        steps: [
          {
            title: "Dynamic Warm-up & Movement Prep (12 minutes)",
            description: "Sport-specific movement patterns and dynamic stretches. Include A-skips, B-skips, carioca, and high knees to prepare for explosive work."
          },
          {
            title: "Speed & Agility Training (20 minutes)",
            description: "Ladder drills, cone drills, shuttle runs, and change of direction work. Focus on quick feet, body control, and acceleration. Quality over quantity."
          },
          {
            title: "Plyometric Power Development (15 minutes)",
            description: "Box jumps, broad jumps, bounds, and medicine ball throws. 3-5 sets of 3-6 reps with full recovery between sets. Emphasize explosive power output."
          },
          {
            title: "Functional Strength Circuit (20 minutes)",
            description: "Multi-planar movements and unilateral exercises. Include rotational work, single-leg exercises, and anti-rotation core work. 3 rounds of circuit."
          },
          {
            title: "Recovery & Mobility (8 minutes)",
            description: "Dynamic stretching and foam rolling. Focus on hip mobility, ankle mobility, and thoracic spine rotation."
          }
        ],
        tips: [
          "Tailor exercises to your specific sport demands",
          "Prioritize movement quality and technique",
          "Allow 48+ hours between high-intensity sessions",
          "Include sport practice alongside this conditioning",
          "Focus on weak links and asymmetries for injury prevention"
        ]
      },
      {
        title: "Peak Performance",
        goal: "Physically Fit",
        difficulty: "advanced",
        description: "Elite-level conditioning program for peak physical performance. Military and athlete-grade training.",
        image: "https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&w=800",
        duration: "12 weeks",
        days: "6",
        intensity: "Extreme",
        exercises: [
          "CrossFit WODs",
          "Olympic Lifts",
          "Advanced Calisthenics",
          "Endurance Challenges",
          "Competition Prep"
        ],
        steps: [
          {
            title: "Comprehensive Movement Preparation (20 minutes)",
            description: "Full-body dynamic warm-up, mobility flow, and CNS activation. Include complex movement patterns and gradual intensity ramping."
          },
          {
            title: "Skill Work & Technical Training (20 minutes)",
            description: "Olympic lift technique, advanced gymnastic movements, or complex skills. Work at submaximal intensity focusing on movement refinement."
          },
          {
            title: "Workout of the Day - WOD (30-45 minutes)",
            description: "High-intensity mixed-modal workout combining weightlifting, gymnastics, and metabolic conditioning. Push maximum effort while maintaining technique."
          },
          {
            title: "Accessory Strength (15 minutes)",
            description: "Target weaknesses with focused strength work. Could be extra pulling, core, or mobility depending on individual needs."
          },
          {
            title: "Conditioning Finisher (10 minutes)",
            description: "Short, intense metabolic conditioning piece. Row, bike, or run intervals to develop anaerobic capacity."
          },
          {
            title: "Recovery & Regeneration (15 minutes)",
            description: "Thorough cool-down, stretching, and recovery work. Consider ice baths, compression, or massage as available."
          }
        ],
        tips: [
          "Requires solid foundation in all movement patterns",
          "Nutrition and sleep are critical - treat like an elite athlete",
          "Monitor biometric data: HRV, sleep quality, recovery markers",
          "Scale appropriately - intensity over ego",
          "Work with qualified coach for programming and technique checks",
          "Include dedicated rest days and active recovery",
          "Mental preparation and mindset training equally important",
          "Consider this full-time athletic commitment level training"
        ]
      },
      {
        title: "Home Workout Starter",
        goal: "Lose Weight",
        difficulty: "beginner",
        description: "No-equipment workout perfect for home fitness beginners. Build consistency with simple movements.",
        image: "https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&w=800",
        duration: "4 weeks",
        days: "3",
        intensity: "Low",
        exercises: [
          "Wall Push-ups",
          "Chair Squats",
          "Standing Knee Raises",
          "Arm Circles",
          "Toe Touches"
        ],
        steps: [
          {
            title: "Gentle Warm-up (5 minutes)",
            description: "March in place, gentle arm swings, and neck rolls. Wake up your body gradually."
          },
          {
            title: "Beginner Circuit (15 minutes)",
            description: "Perform each exercise for 20 seconds with 20 seconds rest. Complete 2 rounds."
          },
          {
            title: "Rest & Recover (2 minutes)",
            description: "Walk around slowly and drink water. Allow your heart rate to come down."
          },
          {
            title: "Cool Down (5 minutes)",
            description: "Gentle stretching for all major muscle groups."
          }
        ],
        tips: [
          "Start with modified versions if needed",
          "Set a regular schedule",
          "Celebrate small wins",
          "Focus on your own progress"
        ]
      },
      {
        title: "Walking & Light Strength",
        goal: "Full Body",
        difficulty: "beginner",
        description: "Combine daily walks with light strength training for overall wellness.",
        image: "https://images.pexels.com/photos/4162487/pexels-photo-4162487.jpeg?auto=compress&cs=tinysrgb&w=800",
        duration: "6 weeks",
        days: "4",
        intensity: "Low-Moderate",
        exercises: [
          "30-min Walks",
          "Light Dumbbell Work",
          "Step-ups",
          "Wall Sits",
          "Resistance Bands"
        ],
        steps: [
          {
            title: "Daily Walk (30 minutes)",
            description: "Walk at a comfortable pace that still gets your heart rate up slightly."
          },
          {
            title: "Light Strength Training (15 minutes)",
            description: "Add light dumbbell exercises (5-8 lbs). Focus on proper form."
          },
          {
            title: "Lower Body Work (10 minutes)",
            description: "Step-ups, wall sits (hold 20-30 sec), and standing leg lifts."
          },
          {
            title: "Stretching Routine (10 minutes)",
            description: "Full body stretching focusing on major muscle groups."
          }
        ],
        tips: [
          "Walking daily builds cardiovascular foundation",
          "Start with light dumbbells",
          "Listen to your body",
          "Invest in good walking shoes"
        ]
      },
      {
        title: "Flexibility & Balance",
        goal: "Physically Fit",
        difficulty: "beginner",
        description: "Focus on improving flexibility, balance, and mobility for injury prevention.",
        image: "https://images.pexels.com/photos/3766211/pexels-photo-3766211.jpeg?auto=compress&cs=tinysrgb&w=800",
        duration: "5 weeks",
        days: "3-4",
        intensity: "Low",
        exercises: [
          "Yoga Poses",
          "Balance Exercises",
          "Hip Openers",
          "Spinal Twists",
          "Shoulder Mobility"
        ],
        steps: [
          {
            title: "Breathing & Centering (5 minutes)",
            description: "Deep breathing exercises and gentle movement to connect mind and body."
          },
          {
            title: "Dynamic Stretching (15 minutes)",
            description: "Flow through gentle movements: cat-cow, leg swings, arm circles."
          },
          {
            title: "Balance Work (10 minutes)",
            description: "Single-leg stands, heel-to-toe walks, tree pose holds."
          },
          {
            title: "Deep Stretching (15 minutes)",
            description: "Hold static stretches for 30-60 seconds each."
          }
        ],
        tips: [
          "Never force a stretch",
          "Breathe deeply throughout",
          "Be patient with progress",
          "Practice regularly for best results"
        ]
      },
      {
        title: "Swimming for Fitness",
        goal: "Lose Weight",
        difficulty: "beginner",
        description: "Low-impact aquatic workout perfect for joint-friendly cardio.",
        image: "https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg?auto=compress&cs=tinysrgb&w=800",
        duration: "6 weeks",
        days: "3",
        intensity: "Moderate",
        exercises: [
          "Freestyle Swimming",
          "Water Walking",
          "Pool Exercises",
          "Treading Water",
          "Kickboard Work"
        ],
        steps: [
          {
            title: "Pool Warm-up (10 minutes)",
            description: "Start with water walking or easy swimming."
          },
          {
            title: "Swimming Intervals (20 minutes)",
            description: "Swim for 2 minutes, rest 1 minute. Repeat 6-8 times."
          },
          {
            title: "Water Exercises (10 minutes)",
            description: "Leg lifts, arm exercises, and jumping jacks in water."
          },
          {
            title: "Cool Down Swim (5 minutes)",
            description: "Easy swimming or water walking."
          }
        ],
        tips: [
          "Swimming is excellent for joint pain",
          "Focus on consistent movement",
          "Consider swim lessons if needed",
          "Wear proper swim goggles"
        ]
      },
      {
        title: "Chair Workout Basics",
        goal: "Full Body",
        difficulty: "beginner",
        description: "Seated and chair-assisted exercises for seniors or limited mobility.",
        image: "https://images.pexels.com/photos/4162494/pexels-photo-4162494.jpeg?auto=compress&cs=tinysrgb&w=800",
        duration: "4 weeks",
        days: "3-5",
        intensity: "Low",
        exercises: [
          "Seated Marches",
          "Chair Squats",
          "Seated Arm Raises",
          "Ankle Circles",
          "Seated Twists"
        ],
        steps: [
          {
            title: "Seated Warm-up (5 minutes)",
            description: "Gentle movements while seated: shoulder rolls, neck stretches."
          },
          {
            title: "Upper Body Exercises (10 minutes)",
            description: "Seated arm raises, bicep curls, overhead reaches. 10-12 reps each."
          },
          {
            title: "Lower Body Work (10 minutes)",
            description: "Seated leg lifts, marching, chair squats. 10-15 reps each."
          },
          {
            title: "Core & Balance (8 minutes)",
            description: "Seated twists, side bends, standing balance holding chair."
          }
        ],
        tips: [
          "Use a sturdy chair without wheels",
          "Move at your own pace",
          "Add light weights when ready",
          "Great for maintaining independence"
        ]
      },
      {
        title: "Beginner Strength Foundation",
        goal: "Muscle Gain",
        difficulty: "beginner",
        description: "Learn proper lifting technique with light weights for future gains.",
        image: "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=800",
        duration: "6 weeks",
        days: "3",
        intensity: "Moderate",
        exercises: [
          "Goblet Squats (light)",
          "Dumbbell Press",
          "Assisted Pull-ups",
          "Dumbbell Deadlifts",
          "Plank Holds"
        ],
        steps: [
          {
            title: "Movement Practice (10 minutes)",
            description: "Practice each exercise with no weight. Focus on proper form."
          },
          {
            title: "Working Sets (25 minutes)",
            description: "3 sets of 8-10 reps for each exercise with light weight."
          },
          {
            title: "Core Finisher (8 minutes)",
            description: "Planks, bird dogs, and dead bugs. 3 sets each."
          },
          {
            title: "Mobility Work (7 minutes)",
            description: "Hip flexor stretches and shoulder mobility work."
          }
        ],
        tips: [
          "Master form before adding weight",
          "Video yourself to check technique",
          "Focus on consistency first",
          "Keep a training log"
        ]
      },
      {
        title: "Running & Endurance",
        goal: "Lose Weight",
        difficulty: "intermediate",
        description: "Build running endurance with structured training for 5K/10K races.",
        image: "https://images.pexels.com/photos/2803158/pexels-photo-2803158.jpeg?auto=compress&cs=tinysrgb&w=800",
        duration: "10 weeks",
        days: "4-5",
        intensity: "Moderate-High",
        exercises: [
          "Interval Runs",
          "Tempo Runs",
          "Long Slow Distance",
          "Hill Repeats",
          "Runner Strength"
        ],
        steps: [
          {
            title: "Running Warm-up (10 minutes)",
            description: "Dynamic leg swings, walking lunges, high knees, butt kicks."
          },
          {
            title: "Main Run Session (30-45 minutes)",
            description: "Varies by day: intervals, tempo runs, or long runs."
          },
          {
            title: "Strength Supplement (15 minutes)",
            description: "Post-run strength: single-leg deadlifts, calf raises, hip bridges."
          },
          {
            title: "Cool Down & Stretch (10 minutes)",
            description: "Easy walking and static stretches for major muscle groups."
          }
        ],
        tips: [
          "Follow 80/20 rule: 80% easy, 20% hard",
          "Increase mileage by max 10% per week",
          "Get properly fitted running shoes",
          "Include rest days"
        ]
      },
      {
        title: "Kettlebell Power",
        goal: "Full Body",
        difficulty: "intermediate",
        description: "Dynamic kettlebell training for power, strength, and cardiovascular fitness.",
        image: "https://images.pexels.com/photos/3766211/pexels-photo-3766211.jpeg?auto=compress&cs=tinysrgb&w=800",
        duration: "8 weeks",
        days: "4",
        intensity: "High",
        exercises: [
          "Kettlebell Swings",
          "Turkish Get-ups",
          "Goblet Squats",
          "Clean and Press",
          "Kettlebell Rows"
        ],
        steps: [
          {
            title: "Movement Preparation (10 minutes)",
            description: "Hip hinges, shoulder mobility, light practice swings."
          },
          {
            title: "Power Development (20 minutes)",
            description: "Kettlebell swings: 10 sets of 15-20 reps with 45 sec rest."
          },
          {
            title: "Strength Complex (20 minutes)",
            description: "Circuit of goblet squats, clean and press, rows. 4 rounds."
          },
          {
            title: "Turkish Get-up Practice (10 minutes)",
            description: "3-4 reps per side with moderate weight."
          }
        ],
        tips: [
          "Master the swing first",
          "Start lighter than you think",
          "Breathing is crucial",
          "Consider kettlebell certification"
        ]
      },
      {
        title: "Bodyweight Mastery",
        goal: "Muscle Gain",
        difficulty: "intermediate",
        description: "Advanced bodyweight progressions to build muscle without equipment.",
        image: "https://images.pexels.com/photos/4162494/pexels-photo-4162494.jpeg?auto=compress&cs=tinysrgb&w=800",
        duration: "10 weeks",
        days: "4-5",
        intensity: "High",
        exercises: [
          "Pistol Squats",
          "Handstand Push-ups",
          "Muscle-ups",
          "L-sits",
          "Dragon Flags"
        ],
        steps: [
          {
            title: "Skill Warm-up (15 minutes)",
            description: "Handstand holds, hollow body holds, support holds on bars."
          },
          {
            title: "Strength Progressions (25 minutes)",
            description: "Work on progressions toward advanced moves with scaled versions."
          },
          {
            title: "Volume Work (20 minutes)",
            description: "High-rep sets of basics: push-ups, pull-ups, dips, rows."
          },
          {
            title: "Core & Stability (12 minutes)",
            description: "Advanced core work: L-sits, planche holds, front levers."
          }
        ],
        tips: [
          "Progress slowly with skills",
          "Use resistance bands for assistance",
          "Film yourself regularly",
          "Train pushing and pulling equally"
        ]
      },
      {
        title: "Cycling Performance",
        goal: "Physically Fit",
        difficulty: "intermediate",
        description: "Structured cycling program for endurance and power development.",
        image: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=800",
        duration: "12 weeks",
        days: "4-5",
        intensity: "Moderate-High",
        exercises: [
          "Interval Rides",
          "Hill Climbs",
          "Time Trials",
          "Recovery Rides",
          "Cycling Strength"
        ],
        steps: [
          {
            title: "Easy Spin Warm-up (15 minutes)",
            description: "Light pedaling at low resistance to warm up."
          },
          {
            title: "Main Workout (45-90 minutes)",
            description: "Varies by day: intervals, hill repeats, tempo, or long rides."
          },
          {
            title: "Off-Bike Strength (15 minutes)",
            description: "Single-leg squats, hip thrusts, core work 2-3 times per week."
          },
          {
            title: "Cool Down Spin (10 minutes)",
            description: "Easy pedaling to flush legs."
          }
        ],
        tips: [
          "Maintain 80-100 RPM cadence",
          "Get professional bike fit",
          "Mix indoor and outdoor rides",
          "Use heart rate zones to guide intensity"
        ]
      },
      {
        title: "Powerlifting Prep",
        goal: "Muscle Gain",
        difficulty: "intermediate",
        description: "Focus on squat, bench, deadlift with proven powerlifting methods.",
        image: "https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&w=800",
        duration: "12 weeks",
        days: "4",
        intensity: "High",
        exercises: [
          "Back Squats",
          "Bench Press",
          "Deadlifts",
          "Overhead Press",
          "Barbell Rows"
        ],
        steps: [
          {
            title: "Specific Warm-up (15 minutes)",
            description: "Mobility work then progressive ramping sets."
          },
          {
            title: "Main Lift (30 minutes)",
            description: "One of the big three. 5-8 sets of 1-5 reps at 75-90% 1RM."
          },
          {
            title: "Supplemental Work (20 minutes)",
            description: "Variations of main lift. 3-4 sets of 5-8 reps."
          },
          {
            title: "Accessory Exercises (15 minutes)",
            description: "Target weak points. 3-4 exercises, 3 sets of 8-12 reps."
          }
        ],
        tips: [
          "Follow proven programs like 5/3/1",
          "Video your heavy sets",
          "Eat in surplus with high protein",
          "Sleep 8+ hours"
        ]
      },
      {
        title: "Boxing & Conditioning",
        goal: "Lose Weight",
        difficulty: "intermediate",
        description: "High-intensity boxing training combined with conditioning work.",
        image: "https://images.pexels.com/photos/4754146/pexels-photo-4754146.jpeg?auto=compress&cs=tinysrgb&w=800",
        duration: "8 weeks",
        days: "4-5",
        intensity: "High",
        exercises: [
          "Heavy Bag Work",
          "Shadow Boxing",
          "Speed Bag",
          "Jump Rope",
          "Pad Work"
        ],
        steps: [
          {
            title: "Jump Rope Warm-up (10 minutes)",
            description: "Start slow and build pace. Mix footwork patterns."
          },
          {
            title: "Shadow Boxing (10 minutes)",
            description: "Practice combinations and movement without equipment."
          },
          {
            title: "Heavy Bag Rounds (20 minutes)",
            description: "6 rounds of 3 minutes with 1 minute rest."
          },
          {
            title: "Conditioning Circuit (15 minutes)",
            description: "Burpees, mountain climbers, push-ups, core work."
          }
        ],
        tips: [
          "Wrap hands properly",
          "Learn basic technique first",
          "Stay light on feet",
          "Consider joining boxing gym"
        ]
      },
      {
        title: "Olympic Weightlifting",
        goal: "Muscle Gain",
        difficulty: "advanced",
        description: "Master the snatch and clean & jerk for explosive strength.",
        image: "https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&w=800",
        duration: "16 weeks",
        days: "5-6",
        intensity: "Very High",
        exercises: [
          "Snatch",
          "Clean and Jerk",
          "Front Squats",
          "Overhead Squats",
          "Power Variations"
        ],
        steps: [
          {
            title: "Technical Warm-up (20 minutes)",
            description: "Barbell complexes with PVC or empty bar."
          },
          {
            title: "Primary Lift (30 minutes)",
            description: "Snatch or clean & jerk. 8-12 sets of 1-3 reps at 70-90% 1RM."
          },
          {
            title: "Strength Work (25 minutes)",
            description: "Heavy squats or pulls. 5 sets of 2-5 reps."
          },
          {
            title: "Power Variations (15 minutes)",
            description: "Power snatches or cleans. 4-5 sets of 2-4 reps."
          }
        ],
        tips: [
          "Requires coaching",
          "Video analysis essential",
          "Mobility is critical",
          "Takes years to master"
        ]
      },
      {
        title: "Gymnastic Strength",
        goal: "Full Body",
        difficulty: "advanced",
        description: "Advanced gymnastic strength elements and rings work.",
        image: "https://images.pexels.com/photos/4162494/pexels-photo-4162494.jpeg?auto=compress&cs=tinysrgb&w=800",
        duration: "16 weeks",
        days: "5-6",
        intensity: "Very High",
        exercises: [
          "Iron Cross",
          "Planche",
          "Front Lever",
          "Back Lever",
          "Handstand Push-ups"
        ],
        steps: [
          {
            title: "Joint Preparation (20 minutes)",
            description: "Extensive shoulder, elbow, wrist conditioning."
          },
          {
            title: "Straight Arm Strength (25 minutes)",
            description: "Isometric holds: planche leans, front lever progressions."
          },
          {
            title: "Dynamic Strength (25 minutes)",
            description: "Ring muscle-ups, 90-degree push-ups, swing to positions."
          },
          {
            title: "Bent Arm Strength (20 minutes)",
            description: "Weighted pull-ups, ring dips, handstand push-ups."
          }
        ],
        tips: [
          "Multi-year journey",
          "Connective tissue adapts slowly",
          "Rings harder than bars",
          "Listen to joint pain"
        ]
      },
      {
        title: "Strongman Training",
        goal: "Muscle Gain",
        difficulty: "advanced",
        description: "Functional strength with atlas stones, yoke walks, and farmer carries.",
        image: "https://images.pexels.com/photos/3076514/pexels-photo-3076514.jpeg?auto=compress&cs=tinysrgb&w=800",
        duration: "12 weeks",
        days: "4-5",
        intensity: "Extreme",
        exercises: [
          "Atlas Stone Lifts",
          "Yoke Walks",
          "Farmer Carries",
          "Log Press",
          "Tire Flips"
        ],
        steps: [
          {
            title: "General Warm-up (20 minutes)",
            description: "Full body mobility then specific warm-up for events."
          },
          {
            title: "Main Event Training (40 minutes)",
            description: "Focus on 2-3 strongman events near maximal weights."
          },
          {
            title: "Supplemental Strength (25 minutes)",
            description: "Heavy barbell work: deadlifts, squats, overhead press."
          },
          {
            title: "Grip & Stability (15 minutes)",
            description: "Farmer carries, pinch grip holds, wrist rollers."
          }
        ],
        tips: [
          "Requires strongman equipment",
          "Form is critical",
          "Build base strength first",
          "Train with experienced athletes"
        ]
      },
      {
        title: "Ultra Endurance",
        goal: "Physically Fit",
        difficulty: "advanced",
        description: "Train for marathons, ultra runs, or Ironman triathlons.",
        image: "https://images.pexels.com/photos/2803158/pexels-photo-2803158.jpeg?auto=compress&cs=tinysrgb&w=800",
        duration: "20 weeks",
        days: "6-7",
        intensity: "High Volume",
        exercises: [
          "Long Distance Running",
          "Tempo Runs",
          "Brick Workouts",
          "Open Water Swimming",
          "Century Rides"
        ],
        steps: [
          {
            title: "Base Building (Weeks 1-8)",
            description: "Build aerobic base with high volume, low intensity."
          },
          {
            title: "Build Phase (Weeks 9-14)",
            description: "Add tempo runs, intervals, race-pace work."
          },
          {
            title: "Peak Phase (Weeks 15-18)",
            description: "Highest volume and intensity. Practice race nutrition."
          },
          {
            title: "Taper Phase (Weeks 19-20)",
            description: "Reduce volume by 40-60%, maintain intensity."
          }
        ],
        tips: [
          "Requires significant time commitment",
          "Nutrition strategy crucial",
          "Practice race-day nutrition",
          "Sleep 8-9 hours minimum"
        ]
      },
      {
        title: "Combat Sports Conditioning",
        goal: "Lose Weight",
        difficulty: "advanced",
        description: "MMA and combat sports prep with striking and grappling conditioning.",
        image: "https://images.pexels.com/photos/4754146/pexels-photo-4754146.jpeg?auto=compress&cs=tinysrgb&w=800",
        duration: "12 weeks",
        days: "5-6",
        intensity: "Extreme",
        exercises: [
          "Sparring Rounds",
          "Grappling",
          "Heavy Bag Work",
          "Wrestling Drills",
          "Fight Conditioning"
        ],
        steps: [
          {
            title: "Technical Training (60 minutes)",
            description: "Skill work in striking and grappling. Pad work and drilling."
          },
          {
            title: "Live Rounds (20-30 minutes)",
            description: "Sparring or rolling at 70-80% intensity."
          },
          {
            title: "Strength & Power (30 minutes)",
            description: "Compound lifts and explosive movements."
          },
          {
            title: "Conditioning Finisher (15 minutes)",
            description: "High-intensity intervals mimicking fight rounds."
          }
        ],
        tips: [
          "Must train at qualified gym",
          "Technical skill most important",
          "Spar safely with good partners",
          "Monitor overtraining"
        ]
      },
      {
        title: "Advanced Powerbuilding",
        goal: "Muscle Gain",
        difficulty: "advanced",
        description: "Hybrid of powerlifting and bodybuilding for maximum size and strength.",
        image: "https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg?auto=compress&cs=tinysrgb&w=800",
        duration: "16 weeks",
        days: "6",
        intensity: "Extreme",
        exercises: [
          "Heavy Compound Lifts",
          "High Volume Hypertrophy",
          "Progressive Overload",
          "Intensity Techniques",
          "Bodybuilding Splits"
        ],
        steps: [
          {
            title: "Power Movement (30 minutes)",
            description: "One main compound lift at 80-90% 1RM. 5-8 sets of 1-5 reps."
          },
          {
            title: "Hypertrophy Block (35 minutes)",
            description: "4-5 exercises for 4 sets of 8-12 reps. Focus on time under tension."
          },
          {
            title: "Volume Work (25 minutes)",
            description: "3-4 isolation exercises, 3-4 sets of 12-20 reps."
          },
          {
            title: "Weak Point Training (15 minutes)",
            description: "Target individual muscle imbalances."
          }
        ],
        tips: [
          "Eat in caloric surplus",
          "Protein minimum 1g per lb",
          "Periodize intensity",
          "Track every workout"
        ]
      }
    ];

    function getExerciseInstructions(exerciseName) {
      const instructions = {
        // Cardio exercises
        "Jumping Jacks": "Stand upright with feet together. Jump while spreading legs shoulder-width apart and raising arms overhead. Jump back to starting position. Maintain steady rhythm.",
        "Mountain Climbers": "Start in plank position. Quickly alternate bringing knees toward chest. Keep core tight and hips level. Move with control and speed.",
        "Burpees": "From standing, drop into squat, place hands down, jump feet back to plank. Optional push-up. Jump feet forward, explode up. Full body exercise.",
        "High Knees": "Run in place bringing knees up to hip height. Pump arms naturally. Land softly on balls of feet. Maintain upright posture throughout.",
        "Bodyweight Squats": "Stand with feet shoulder-width apart. Lower hips back and down as if sitting. Keep chest up, knees over toes. Push through heels to stand.",
        "Running Intervals": "Alternate between high-intensity sprints and recovery jogs. Sprint at 80-90% max effort, recover at easy pace. Focus on form and breathing.",
        "Sprint Intervals": "All-out running efforts at maximum speed. Allow full recovery between sprints. Focus on explosive power and proper running mechanics.",
        "Brisk Walking": "Walk at pace where you can talk but not sing. Maintain good posture, swing arms naturally. Gradually increase speed as fitness improves.",
        
        // Strength exercises
        "Kettlebell Swings": "Hip-hinge movement. Swing kettlebell between legs, then thrust hips forward powerfully. Kettlebell rises to chest height. Control the descent.",
        "Box Jumps": "Stand facing box. Bend knees and swing arms back. Explode upward landing softly on box. Step down carefully. Reset between jumps.",
        "Battle Ropes": "Hold rope ends in each hand. Create waves by alternating arms up and down. Keep core engaged, slight knee bend. Various patterns possible.",
        "Dumbbell Thrusters": "Hold dumbbells at shoulders. Squat down, then explosively stand while pressing dumbbells overhead. Lower weights and repeat. Full body power move.",
        "Goblet Squats": "Hold dumbbell or kettlebell at chest. Squat down keeping elbows inside knees. Drive through heels to stand. Great for learning squat form.",
        "Push-ups": "Start in plank. Lower body by bending elbows until chest nearly touches floor. Push back up. Keep body in straight line. Modify on knees if needed.",
        "Dumbbell Rows": "Hinge forward at hips, one hand supported. Pull dumbbell to hip, elbow close to body. Lower with control. Feel squeeze in back.",
        "Lunges": "Step forward, lower back knee toward ground. Front knee stays over ankle. Push through front heel to return. Alternate legs or complete one side.",
        "Plank": "Forearms on ground, body straight from head to heels. Engage core, squeeze glutes. Don't let hips sag. Hold position, breathe normally.",
        "Barbell Squats": "Bar on upper back. Feet shoulder-width. Squat down keeping chest up. Thighs parallel or below. Drive through heels. Core tight throughout.",
        "Bench Press": "Lie on bench, feet flat. Lower bar to mid-chest with control. Press bar up to full arm extension. Maintain shoulder blade squeeze.",
        "Deadlifts": "Bar over mid-foot. Bend at hips and knees to grip bar. Keep back flat, chest up. Drive through floor, extend hips. Lower with control.",
        "Overhead Press": "Bar at shoulder height. Press bar straight up overhead. Lock out arms fully. Lower to shoulders. Keep core braced throughout.",
        "Pull-ups": "Hang from bar, full arm extension. Pull body up until chin over bar. Lower with control. Engage lats and core. Use assistance if needed.",
        "Front Squats": "Bar rests on front shoulders. Keep elbows high. Squat down maintaining upright torso. Drive through heels to stand. Great for quad development.",
        "Weighted Pull-ups": "Pull-ups with added weight via belt or vest. Same form as regular pull-ups. Build serious back strength and size.",
        "Clean and Press": "Explosively pull bar from floor to shoulders (clean). Then press overhead. Technical Olympic-style lift requiring practice.",
        "Bulgarian Split Squats": "Rear foot elevated on bench. Lower into single-leg squat. Front knee tracks over toes. Drive through front heel. Builds balance and strength.",
        "Ring Dips": "Grip gymnastic rings. Lower body by bending arms. Press back up. Rings add instability. Keep body stable and straight.",
        
        // Powerlifting
        "Back Squats": "Classic barbell squat with bar on upper back. King of leg exercises. Focus on depth, form, and progressive overload.",
        "Romanian Deadlifts": "Hip hinge with slight knee bend. Lower bar down legs keeping back flat. Feel hamstring stretch. Drive hips forward to stand.",
        "Barbell Rows": "Bent over at hips, bar hanging. Pull bar to lower chest/upper abs. Squeeze shoulder blades. Lower with control. Build thick back.",
        "Barbell Bench Press": "Standard bench press. Lie flat, feet planted. Lower bar to chest, press to lockout. Primary chest builder.",
        "Incline Dumbbell Press": "On inclined bench (30-45°). Press dumbbells overhead. Targets upper chest. Full range of motion for size.",
        "Leg Press": "Seated machine exercise. Push platform away by extending legs. Keep back flat on pad. Good quad builder, easier on lower back than squats.",
        
        // Bodyweight/Calisthenics
        "Pistol Squats": "Single-leg squat. Lower on one leg while other extends forward. Requires strength, balance, mobility. Progress slowly with assistance.",
        "Handstand Push-ups": "Inverted position against wall. Lower head toward ground. Press back up. Elite shoulder strength exercise. Work progressions first.",
        "Muscle-ups": "Explosive pull-up transitioning to dip. Pull high, shift body over bar/rings, press out. Advanced gymnastic movement.",
        "L-sits": "Support body on bars or floor. Lift legs straight out forming 'L' shape. Hold position. Incredible core and hip flexor strength.",
        "Dragon Flags": "Lie on bench, grip behind head. Lift entire body rigid to vertical. Lower slowly. Made famous by Bruce Lee. Very advanced core.",
        "Wall Push-ups": "Push-ups against wall. Stand arm's length away. Lean in, push back. Perfect beginner progression.",
        "Chair Squats": "Sit down to chair, stand back up. Can use arms for assistance. Build leg strength safely for beginners or seniors.",
        
        // Cardio machines
        "Assault Bike": "Air bike with moving arms. Pedal and push/pull handles. Harder you work, more resistance. Brutal cardio conditioning.",
        "Sled Push": "Push weighted sled across floor. Lean into it, drive with legs. Phenomenal leg and conditioning work. Relatively low impact.",
        "Burpee Pull-ups": "Burpee to standing, jump to pull-up bar, perform pull-up. Drop down, repeat. Intense full body cardio-strength combo.",
        
        // Flexibility
        "Yoga Poses": "Various poses improving flexibility and balance. Hold positions, focus on breathing. Builds body awareness and mobility.",
        "Hip Openers": "Stretches targeting hip flexors and external rotators. Crucial for squat depth and daily movement. Hold each 30-60 seconds.",
        "Spinal Twists": "Rotational stretches for thoracic spine. Improve rotation ability. Important for athletic performance and posture.",
        "Shoulder Mobility": "Exercises improving shoulder range of motion. Include band work, circles, and stretches. Essential for overhead movements.",
        
        // Swimming
        "Freestyle Swimming": "Front crawl stroke. Alternating arms, flutter kick. Rotate body, breathe to side. Most efficient swimming stroke.",
        "Water Walking": "Walk through water at chest depth. Provides resistance while being low impact. Good warm-up or recovery exercise.",
        "Pool Exercises": "Various water-based movements. Use water resistance for strength work. Excellent for joint issues or recovery.",
        "Treading Water": "Stay afloat in deep water. Sculling motions with hands, egg-beater kick with legs. Builds endurance and water confidence.",
        "Kickboard Work": "Hold board, kick only. Isolates and strengthens leg muscles. Good for improving kick technique and power.",
        
        // Specialized
        "Seated Marches": "Sitting in chair, lift knees alternately. March in place while seated. Safe, accessible cardio for limited mobility.",
        "Seated Arm Raises": "Sitting, raise arms to sides or front. Use light weights if able. Builds shoulder strength safely.",
        "Ankle Circles": "Rotate ankle through full range of motion. Both directions. Improves ankle mobility and circulation.",
        "Seated Twists": "Sitting tall, rotate torso side to side. Can hold weight for resistance. Builds rotational core strength.",
        
        // Resistance training
        "Light Dumbbell Work": "Various exercises with 5-15 lb dumbbells. Curls, presses, rows. Focus on form and consistency over weight.",
        "Step-ups": "Step up onto elevated surface, one leg at a time. Drive through heel. Functional leg exercise, scalable height.",
        "Wall Sits": "Back against wall, slide down to 90° knee angle. Hold position. Builds leg endurance and mental toughness.",
        "Resistance Bands": "Elastic bands providing variable resistance. Portable and versatile. Great for warm-ups, rehab, or full workouts.",
        "Dumbbell Press": "Lying or seated, press dumbbells overhead. Shoulder or chest exercise depending on angle. Build pressing strength.",
        "Assisted Pull-ups": "Pull-ups with band assistance or machine support. Build toward full pull-up. Essential back exercise.",
        "Dumbbell Deadlifts": "Deadlift movement with dumbbells. Slightly easier to learn than barbell. Great posterior chain developer.",
        "Plank Holds": "Hold plank position for time. Build core endurance. Progress to harder variations as you improve.",
        
        // Running
        "Tempo Runs": "Sustained hard effort, comfortably hard pace. Below race pace but above easy. Builds lactate threshold.",
        "Long Slow Distance": "Easy pace runs building aerobic base. Should be able to hold conversation. Majority of training miles.",
        "Hill Repeats": "Sprint up hill, walk down for recovery. Builds power and running strength. Natural resistance training for runners.",
        "Runner Strength": "Strength exercises for runners. Single-leg work, core, hip stability. Injury prevention and performance enhancement.",
        
        // Kettlebell
        "Turkish Get-ups": "Complex movement from lying to standing holding kettlebell. Multiple steps. Builds total body strength and mobility.",
        "Clean and Press": "Clean kettlebell to shoulder, press overhead. Can be explosive or controlled. Full body power exercise.",
        "Kettlebell Rows": "Bent over rowing with kettlebell. Similar form to dumbbell row. Build back strength and size.",
        
        // Cycling
        "Interval Rides": "Alternating hard efforts with recovery. Various work-to-rest ratios. Builds fitness fast but requires recovery.",
        "Hill Climbs": "Cycling up inclines. Builds leg strength and power. Can be seated or standing. Tough mental and physical challenge.",
        "Time Trials": "Sustained maximum effort for set distance or time. Race simulation. Tests fitness and pacing ability.",
        "Recovery Rides": "Easy spinning at low intensity. Promotes blood flow and recovery. Should feel refreshed after, not tired.",
        "Cycling Strength": "Off-bike strength work for cyclists. Single-leg squats, hip thrusts, core. Improves power and prevents injury.",
        
        // Boxing
        "Heavy Bag Work": "Punching heavy bag. Practice combinations, power, and endurance. Excellent cardio and stress relief.",
        "Shadow Boxing": "Boxing movements without equipment. Focus on technique, footwork, combinations. Can be done anywhere.",
        "Speed Bag": "Rhythmic punching of small suspended bag. Develops hand-eye coordination, shoulder endurance, timing.",
        "Jump Rope": "Classic boxer cardio. Builds footwork, coordination, endurance. Many variations possible.",
        "Pad Work": "Partner holds pads, you strike them. Practices technique with resistance and accuracy. More realistic than bag work.",
        
        // Olympic Lifting
        "Snatch": "Bar from floor to overhead in one motion. Most technical lift. Requires coaching. Builds explosive total body power.",
        "Clean and Jerk": "Two-part lift: clean to shoulders, then jerk overhead. Olympic competition lift. Incredibly powerful movement.",
        "Front Squats": "Barbell squat with bar on front shoulders. Keeps torso upright. Great for quads and Olympic lifting positions.",
        "Overhead Squats": "Squat while holding bar locked out overhead. Tests and builds mobility, balance, strength. Prerequisite for snatch.",
        "Power Variations": "Partial versions of Olympic lifts. Power clean, power snatch. Easier to learn, still builds explosive power.",
        
        // Gymnastics
        "Iron Cross": "Hold rings out to sides forming cross. Static strength hold. One of hardest gymnastic skills. Takes years to achieve.",
        "Planche": "Hold body horizontal, arms straight, feet off ground. Insane pushing strength. Multiple progression levels.",
        "Front Lever": "Hang from bar, body horizontal facing up. Pure pulling strength. Train progressions with tuck, single-leg versions.",
        "Back Lever": "Body horizontal facing down while hanging. Slightly easier than front lever. Still extremely difficult.",
        "Handstand Push-ups": "Push-ups in handstand position. Elite shoulder strength. Work wall progressions first.",
        
        // Strongman
        "Atlas Stone Lifts": "Lift heavy round stones to platforms. Grip, back, total body strength. Iconic strongman event.",
        "Yoke Walks": "Walk with heavy frame on shoulders. Builds raw strength and mental toughness. Functional strength display.",
        "Farmer Carries": "Walk holding heavy weight in each hand. Grip, core, trap strength. Simple but brutal.",
        "Log Press": "Press heavy log overhead. Awkward object training. Builds pressing power differently than barbell.",
        "Tire Flips": "Flip large tractor tire end over end. Explosive pull to push movement. Total body power.",
        
        // Endurance
        "Long Distance Running": "Running for extended periods/distances. Builds aerobic engine. Marathon and ultra training foundation.",
        "Brick Workouts": "Bike to run transition training. Teaches body to run on tired legs. Crucial for triathlons.",
        "Open Water Swimming": "Swimming in lakes, ocean vs pool. Different challenges: navigation, temperature, currents. Required for triathlons.",
        "Century Rides": "100-mile bike rides. Huge endurance challenge. Tests fitness, nutrition strategy, mental toughness.",
        
        // MMA/Combat
        "Sparring Rounds": "Practice fighting with partner at controlled intensity. Develops timing, technique, conditioning under pressure.",
        "Grappling": "Wrestling, submissions, ground fighting. Builds strength, endurance, technique. Crucial for MMA.",
        "Wrestling Drills": "Takedown practice, movement drills. High intensity. Builds explosive strength and cardiovascular system.",
        "Fight Conditioning": "High intensity intervals mimicking fight demands. Develops ability to work in rounds with recovery periods.",
        
        // Advanced techniques
        "Drop Sets": "After main set, reduce weight and continue. Pushes muscles past normal failure. High intensity technique.",
        "Supersets": "Two exercises back-to-back without rest. Can be same muscle (agonist) or opposite (antagonist). Time efficient, intense.",
        "Time Under Tension": "Slow controlled reps focusing on muscle contraction time. Build size through metabolic stress.",
        "Advanced Techniques": "Forced reps, negatives, partials, rest-pause. Push beyond normal limits. Use sparingly, high fatigue.",
        "Heavy Compound Lifts": "Squats, deadlifts, bench, overhead press. Foundation of strength training. Progressive overload essential.",
        "High Volume Hypertrophy": "Many sets and reps at moderate weight. Primary method for building muscle size.",
        "Progressive Overload": "Gradually increase demands on muscles. Add weight, reps, sets, or decrease rest. Fundamental training principle.",
        "Intensity Techniques": "Methods to increase workout difficulty beyond standard sets. Drop sets, rest-pause, etc.",
        "Bodybuilding Splits": "Dividing training by body parts over multiple days. Classic approach: chest, back, shoulders, arms, legs.",
        
        // Sport-specific
        "Agility Drills": "Ladder drills, cone drills, change of direction work. Develops quick feet and body control for sports.",
        "Plyometrics": "Jump training. Box jumps, bounds, depth jumps. Develops explosive power and reactive strength.",
        "Speed Work": "Sprint training, acceleration drills. Develops maximum velocity and quick burst ability.",
        "Functional Movements": "Multi-joint exercises mimicking real-world activities. Squats, hinges, pushes, pulls, carries.",
        "Sport-Specific Training": "Exercises directly applicable to your sport. Improves movement patterns used in competition.",
        
        // CrossFit
        "CrossFit WODs": "Workout of the Day. Varied high-intensity functional movements. Constantly varied to prevent adaptation.",
        "Olympic Lifts": "Snatch and clean & jerk. Explosive full-body power movements. Technical lifts building total body power.",
        "Advanced Calisthenics": "High-level bodyweight skills. Muscle-ups, handstand push-ups, pistol squats. Build elite relative strength.",
        "Endurance Challenges": "Long distance runs, rows, or bikes. Tests aerobic capacity and mental toughness.",
        "Competition Prep": "Training specific to upcoming competition. Practice events, test fitness, peak performance.",
        
        // Recovery
        "Yoga/Stretching": "Flexibility work combined with strength and body awareness. Various styles available. Improves recovery and mobility.",
        "Light Cardio": "Easy effort cardiovascular exercise. Walking, easy cycling, swimming. Recovery and base building.",
        "Core Work": "Exercises targeting abdominal and back muscles. Planks, anti-rotation work. Essential for all movement.",
        "Balance Exercises": "Single-leg stands, unstable surface training. Builds proprioception and joint stability.",
        
        // Plyometric Circuits
        "Plyometric Circuits": "Series of jumping exercises performed in sequence. Box jumps, broad jumps, bounds. Builds explosive power."
      };
      
      return instructions[exerciseName] || "Perform this exercise with proper form. Focus on controlled movement and full range of motion. Consult a trainer if unsure about technique.";
    }

    function renderPlans(filter = 'all') {
      const grid = document.getElementById('plansGrid');
      const filtered = filter === 'all' ? workoutPlans : workoutPlans.filter(plan => plan.difficulty === filter);
      
      grid.innerHTML = filtered.map((plan, index) => {
        const originalIndex = workoutPlans.indexOf(plan);
        return `
        <div class="plan-card" data-difficulty="${plan.difficulty}" onclick="showPlanDetails(${originalIndex})">
          <div class="plan-header">
            <img src="${plan.image}" alt="${plan.title}">
            <div class="plan-overlay">
              <h2 class="plan-title">${plan.title}</h2>
            </div>
          </div>
          <div class="plan-content">
            <span class="difficulty-badge difficulty-${plan.difficulty}">${plan.difficulty}</span>
            <span class="plan-goal">${plan.goal}</span>
            <p class="plan-description">${plan.description}</p>
            
            <div class="plan-stats">
              <div class="stat">
                <span class="stat-value">${plan.duration}</span>
                <span class="stat-label">Duration</span>
              </div>
              <div class="stat">
                <span class="stat-value">${plan.days}</span>
                <span class="stat-label">Days/Week</span>
              </div>
              <div class="stat">
                <span class="stat-value">${plan.intensity}</span>
                <span class="stat-label">Intensity</span>
              </div>
            </div>
            
            <div class="exercises-list">
              <div class="exercises-title">Key Exercises</div>
              ${plan.exercises.map(ex => `<div class="exercise-item">${ex}</div>`).join('')}
            </div>
          </div>
        </div>
      `;
      }).join('');
    }

    function filterPlans(level) {
      // Update active button
      document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
      });
      event.target.classList.add('active');
      
      // Render filtered plans - convert level to lowercase to match difficulty values
      const filterValue = level === 'all' ? 'all' : level.toLowerCase();
      renderPlans(filterValue);
    }

    function showPlanDetails(planIndex) {
      const plan = workoutPlans[planIndex];
      const modal = document.getElementById('planModal');
      const modalTitle = document.getElementById('modalTitle');
      const modalMeta = document.getElementById('modalMeta');
      const modalBody = document.getElementById('modalBody');

      // Set title and meta info
      modalTitle.textContent = plan.title;
      modalMeta.innerHTML = `
        <span class="difficulty-badge difficulty-${plan.difficulty}">${plan.difficulty}</span>
        <span>${plan.goal}</span>
        <span>${plan.duration}</span>
        <span>${plan.days} days/week</span>
        <span>${plan.intensity} Intensity</span>
      `;

      // Build body content with key exercises, steps and tips
      modalBody.innerHTML = `
        <div class="section">
          <div class="section-header">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd"/>
            </svg>
            Key Exercises
          </div>
          <div class="exercises-grid">
            ${plan.exercises.map(exercise => `
              <div class="exercise-card">
                <div class="exercise-name">${exercise}</div>
                <div class="exercise-instructions">${getExerciseInstructions(exercise)}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="section">
          <div class="section-header">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
              <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"/>
            </svg>
            Workout Execution Steps
          </div>
          ${plan.steps.map((step, index) => `
            <div class="step">
              <div class="step-number">${index + 1}</div>
              <div>
                <div class="step-title">${step.title}</div>
                <div class="step-description">${step.description}</div>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="tips-box">
          <div class="tips-title">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
            </svg>
            Important Tips
          </div>
          <ul class="tips-list">
            ${plan.tips.map(tip => `<li>${tip}</li>`).join('')}
          </ul>
        </div>
      `;

      // Show modal
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      const modal = document.getElementById('planModal');
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }

    // Close modal when clicking outside content
    document.getElementById('planModal').addEventListener('click', function(e) {
      if (e.target === this) {
        closeModal();
      }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeModal();
      }
    });

    // Navigation function for navbar
    function navigateTo(page) {
      window.location.href = page;
    }

    // Toggle sidebar dropdown
    function toggleSidebar() {
      const sidebar = document.getElementById('dropdownSidebar');
      const overlay = document.getElementById('sidebarOverlay');
      sidebar.classList.toggle('active');
      overlay.classList.toggle('active');
    }
    
    // Close sidebar when clicking outside
    document.addEventListener('click', function(event) {
      const sidebar = document.getElementById('dropdownSidebar');
      const brand = document.querySelector('.navbar-brand');
      if (sidebar && brand && sidebar.classList.contains('active')) {
        if (!sidebar.contains(event.target) && !brand.contains(event.target)) {
          toggleSidebar();
        }
      }
    });

    // About Modal Functions
    function openAboutModal() {
      const aboutModal = document.getElementById('aboutModal');
      aboutModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      
      // Close sidebar if open
      const sidebar = document.getElementById('dropdownSidebar');
      const overlay = document.getElementById('sidebarOverlay');
      if (sidebar && overlay) {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
      }
    }

    function closeAboutModal() {
      const aboutModal = document.getElementById('aboutModal');
      aboutModal.classList.remove('active');
      document.body.style.overflow = '';
    }

    // Close About modal when clicking outside
    document.addEventListener('click', function(event) {
      const aboutModal = document.getElementById('aboutModal');
      if (event.target === aboutModal) {
        closeAboutModal();
      }
    });

    // Terms Modal Functions
    function openTermsModal() {
      const termsModal = document.getElementById('termsModal');
      termsModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      
      // Close sidebar if open
      const sidebar = document.getElementById('dropdownSidebar');
      const overlay = document.getElementById('sidebarOverlay');
      if (sidebar && overlay) {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
      }
    }

    function closeTermsModal() {
      const termsModal = document.getElementById('termsModal');
      termsModal.classList.remove('active');
      document.body.style.overflow = '';
    }

    // Close Terms modal when clicking outside
    document.addEventListener('click', function(event) {
      const termsModal = document.getElementById('termsModal');
      if (event.target === termsModal) {
        closeTermsModal();
      }
    });

    // Logout function
    async function logout() {
      localStorage.removeItem('nutrifit_user');
      localStorage.removeItem('nutrifit_session');
      
      if (window.supabase) {
        try {
          const SUPABASE_URL = 'https://pncfzxuecxzcdyxdwuok.supabase.co';
          const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBuY2Z6eHVlY3h6Y2R5eGR3dW9rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI4Njg1NzEsImV4cCI6MjA3ODQ0NDU3MX0.BlfihjUmYAgP-9UisG4EN1srsteB_SZ9ut5TiBgAQ-E';
          if (!window.supabaseClient) {
            window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
          }
          var supabase = window.supabaseClient;
          await supabase.auth.signOut();
        } catch (err) {
          console.error('Error signing out:', err);
        }
      }
      
      window.location.href = 'index.html';
    }

    // Initial render
    renderPlans();